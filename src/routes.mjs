// The addresses of the site (used by src/i18n.ts). Paths are without the
// base, which is empty on dmxtotalcontrol.com.

export const REPO = 'https://github.com/joseramos1999/DMXTotalControl';
export const ISSUES = `${REPO}/issues/new/choose`;
export const COMPAT_REPORT = `${REPO}/issues/new?template=compatibilidad.md`;
export const RELEASES = `${REPO}/releases`;

/** Spanish and English address of each page; the other languages use the English one */
export const SLUGS = {
	home: ['', ''],
	download: ['descargar', 'download'],
	faq: ['preguntas', 'faq'],
	news: ['novedades', 'news'],
	legal: ['legal', 'legal'],
	features: ['funciones', 'features'],
	hardware: ['hardware', 'hardware'],
	learn: ['aprende', 'learn'],
	qlc: ['vienes-de-qlc', 'from-qlc'],
	contribute: ['colabora', 'contribute'],
	roadmap: ['hoja-de-ruta', 'roadmap'],
	press: ['prensa', 'press'],
};

/** Who it is for: Spanish slug of each audience (the others use the key) */
export const SEGMENT_SLUGS = { djs: 'djs', bands: 'bandas', theatre: 'teatro', schools: 'escuelas', venues: 'salas' };

/** The beginner guides: [Spanish slug, slug for the other languages] */
export const GUIDE_SLUGS = {
	dmx: ['que-es-dmx', 'what-is-dmx'],
	connect: ['conectar-luces-al-ordenador', 'connect-lights-to-a-computer'],
	network: ['art-net-y-sacn', 'art-net-and-sacn'],
	interface: ['elegir-interfaz-dmx-usb', 'choosing-a-usb-dmx-interface'],
};

const prefix = (lang) => (lang === 'es' ? '' : `/${lang}`);

/** @param {keyof typeof SLUGS} route @param {string} lang */
export function routePath(route, lang) {
	const slug = SLUGS[route][lang === 'es' ? 0 : 1];
	return `${prefix(lang)}/${slug ? `${slug}/` : ''}`;
}

/** @param {keyof typeof SEGMENT_SLUGS} seg @param {string} lang */
export function segmentPath(seg, lang) {
	return lang === 'es' ? `/para/${SEGMENT_SLUGS[seg]}/` : `/${lang}/for/${seg}/`;
}

/** @param {keyof typeof GUIDE_SLUGS} guide @param {string} lang */
export function guidePath(guide, lang) {
	const [esSlug, slug] = GUIDE_SLUGS[guide];
	return lang === 'es' ? `/aprende/${esSlug}/` : `/${lang}/learn/${slug}/`;
}

/** @param {string} lang @param {string} page */
export function manualPath(lang, page = '') {
	return `${prefix(lang)}/manual/${page ? `${page}/` : ''}`;
}

/**
 * A link written as scheme:target#hash (manual:salidas, page:download, for:djs,
 * guide:dmx, issues:, compat:, repo:, repo:ROADMAP.md, readme:, releases:),
 * as a path of the site (to put the base in front) or an external address.
 * Anything else comes back as null.
 * @returns {{ path: string } | { external: string } | null}
 */
export function resolveScheme(href, lang) {
	const m = href.match(/^(manual|page|for|guide|issues|compat|repo|readme|releases):([^#]*)(#.*)?$/);
	if (!m) return null;
	const [, scheme, target, hash = ''] = m;
	switch (scheme) {
		case 'manual':
			return { path: manualPath(lang, target) + hash };
		case 'page':
			return { path: routePath(target, lang) + hash };
		case 'for':
			return { path: segmentPath(target, lang) + hash };
		case 'guide':
			return { path: guidePath(target, lang) + hash };
		case 'issues':
			return { external: ISSUES };
		case 'compat':
			return { external: COMPAT_REPORT };
		case 'repo':
			return { external: target ? `${REPO}/blob/main/${target}${hash}` : REPO };
		case 'readme':
			return { external: `${REPO}#readme` };
		case 'releases':
			return { external: RELEASES };
	}
	return null;
}
