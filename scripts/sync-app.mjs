// Brings into the site what it takes from the program's repository, so it is
// written only once: the manual in its six languages (with its images), the
// release notes, and the data of the latest Release (version, size, SHA-256).
//
// APP_REPO points at a checkout of DMXTotalControl (default ../DMXTotalControl).
// GITHUB_TOKEN, when set (as in the deploy workflow), raises the API limit.
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = path.resolve(root, process.env.APP_REPO ?? '../DMXTotalControl');
const REPO = 'joseramos1999/DMXTotalControl';

// The Spanish manual is the root of docs/manual; the others are subfolders.
const LANGS = ['es', 'en', 'pt', 'fr', 'it', 'de'];
// The order of "Cómo está organizado este manual" in docs/manual/index.md.
const ORDER = [
	'index', 'primeros-pasos', 'directo', 'show', 'playbacks', 'programar', 'escenas',
	'patch', 'fixtures', 'salidas', 'mapeos', 'opciones', 'remoto', 'atajos',
];
const INDEX_LABEL = { es: 'Índice', en: 'Contents', pt: 'Índice', fr: 'Sommaire', it: 'Indice', de: 'Inhalt' };

const docsOut = path.join(root, 'src/content/docs');
const notesOut = path.join(root, 'src/content/novedades/es');
const releaseOut = path.join(root, 'src/data/release.json');

if (!existsSync(path.join(app, 'docs/manual/index.md'))) {
	console.error(`sync-app: no encuentro el manual en ${app}. Pon APP_REPO con la ruta del repositorio del programa.`);
	process.exit(1);
}

/** Plain text of a Markdown paragraph, for the page description */
function plain(md) {
	return md
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[*_`>#]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

function description(body) {
	const para = body.split(/\n\s*\n/).map(plain).find((p) => p.length > 40) ?? '';
	if (para.length <= 160) return para;
	const cut = para.slice(0, 157);
	return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

/** Links between manual pages (`directo.md#mezclador`) become site URLs, and
 *  the translations' images (`../img/x.png`) point at the one copy of them. */
function rewrite(md, page, lang) {
	const up = page === 'index' ? '' : '../';
	md = md.replace(/\]\(([a-z0-9-]+)\.md(#[^)\s]*)?\)/g, (_, name, hash = '') => {
		const target = name === 'index' ? (page === 'index' ? './' : '../') : `${up}${name}/`;
		return `](${target}${hash})`;
	});
	if (lang !== 'es') md = md.replaceAll('](../img/', '](../../manual/img/');
	return md;
}

function frontmatter(fields) {
	const lines = Object.entries(fields).map(([k, v]) =>
		typeof v === 'object' ? `${k}:\n${Object.entries(v).map(([a, b]) => `  ${a}: ${JSON.stringify(b)}`).join('\n')}` : `${k}: ${JSON.stringify(v)}`,
	);
	return `---\n${lines.join('\n')}\n---\n`;
}

async function syncManual() {
	await rm(docsOut, { recursive: true, force: true });
	for (const lang of LANGS) {
		const src = path.join(app, 'docs/manual', lang === 'es' ? '' : lang);
		const out = path.join(docsOut, lang === 'es' ? '' : lang, 'manual');
		await mkdir(out, { recursive: true });
		const files = (await readdir(src)).filter((f) => f.endsWith('.md'));
		for (const file of files) {
			const page = file.slice(0, -3);
			const text = (await readFile(path.join(src, file), 'utf8')).replace(/\r\n/g, '\n');
			const match = text.match(/^# (.+)\n/m);
			const title = match ? match[1].trim() : page;
			const body = match ? text.replace(match[0], '') : text;
			const order = ORDER.indexOf(page);
			const sidebar = page === 'index' ? { order: 0, label: INDEX_LABEL[lang] } : { order: order < 0 ? 99 : order };
			await writeFile(
				path.join(out, file),
				frontmatter({ title, description: description(body), sidebar }) + rewrite(body, page, lang),
			);
		}
		console.log(`sync-app: manual ${lang}, ${files.length} páginas`);
	}
	await cp(path.join(app, 'docs/manual/img'), path.join(docsOut, 'manual/img'), { recursive: true });
}

async function github(endpoint) {
	const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'dmxtotalcontrol-web' };
	if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
	const res = await fetch(`https://api.github.com/repos/${REPO}/${endpoint}`, { headers });
	if (!res.ok) throw new Error(`${endpoint}: HTTP ${res.status}`);
	return res.json();
}

/** The latest Release and the date of every version. Without network (or over
 *  the API limit) the release.json already in the repository is kept. */
async function syncRelease() {
	try {
		const [latest, all] = await Promise.all([github('releases/latest'), github('releases?per_page=100')]);
		const asset = latest.assets.find((a) => /^DMXTotalControl-Setup-.*\.exe$/.test(a.name));
		if (!asset) throw new Error(`la Release ${latest.tag_name} no tiene instalador`);
		const release = {
			version: latest.tag_name.replace(/^v/, ''),
			tag: latest.tag_name,
			date: latest.published_at.slice(0, 10),
			url: latest.html_url,
			installer: {
				name: asset.name,
				size: asset.size,
				url: asset.browser_download_url,
				sha256: asset.digest?.replace(/^sha256:/, '') ?? null,
			},
			releases: all
				.filter((r) => !r.draft)
				.map((r) => ({ tag: r.tag_name, date: r.published_at.slice(0, 10), prerelease: r.prerelease })),
		};
		await mkdir(path.dirname(releaseOut), { recursive: true });
		await writeFile(releaseOut, JSON.stringify(release, null, '\t') + '\n');
		console.log(`sync-app: Release ${release.tag} del ${release.date}`);
		return release;
	} catch (err) {
		if (!existsSync(releaseOut)) throw err;
		console.warn(`sync-app: no se pudo leer la Release (${err.message}); uso la de src/data/release.json`);
		return JSON.parse(await readFile(releaseOut, 'utf8'));
	}
}

/** docs/novedades/vX.Y.Z.md, with the date of its Release when there is one */
async function syncNotes(release) {
	await rm(notesOut, { recursive: true, force: true });
	await mkdir(notesOut, { recursive: true });
	const dir = path.join(app, 'docs/novedades');
	const files = (await readdir(dir)).filter((f) => /^v\d+\.\d+\.\d+.*\.md$/.test(f));
	for (const file of files) {
		const tag = file.slice(0, -3);
		const text = (await readFile(path.join(dir, file), 'utf8')).replace(/\r\n/g, '\n');
		const match = text.match(/^#{1,2} (.+)\n/m);
		const published = release.releases.find((r) => r.tag === tag);
		const fields = { title: match ? match[1].trim() : tag, version: tag.slice(1) };
		if (published) fields.date = published.date;
		await writeFile(path.join(notesOut, file), frontmatter(fields) + (match ? text.replace(match[0], '') : text));
	}
	console.log(`sync-app: ${files.length} notas de versión`);
}

await syncManual();
await syncNotes(await syncRelease());
