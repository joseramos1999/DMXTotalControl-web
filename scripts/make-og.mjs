// Draws the images that social networks show when someone shares the site
// (1200 × 630, public/og/<lang>.png): the logo, the name, the home page's
// headline and a screenshot of the Live page, in each language. Run it again
// after changing those texts or the screenshots: `node scripts/make-og.mjs`
// (Node 22.18 or later, which reads the TypeScript dictionaries directly).
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;
const LANGS = ['es', 'en', 'pt', 'fr', 'it', 'de'];

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const text = {};
for (const lang of LANGS) {
	const { home } = (await import(pathToFileURL(path.join(root, `src/i18n/${lang}.ts`)).href)).default;
	text[lang] = { a: xml(home.h1a), b: xml(home.h1b), foot: xml(home.eyebrow) };
}

const font = "'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif";

/** Width in pixels of a line at 50 px, measured with the font itself */
async function width50(line) {
	const { info } = await sharp({ text: { text: line.replace(/&(?!amp;|lt;)/g, "&amp;"), font: "Segoe UI Bold 50", dpi: 72 } })
		.png()
		.toBuffer({ resolveWithObject: true });
	return info.width;
}

async function background({ a, b, foot }) {
	// The headline must end before the screenshot (x = 640): smaller type for long lines
	const widest = Math.max(await width50(a), await width50(b));
	const size = Math.min(50, Math.floor((50 * 540) / widest));
	return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
	<defs>
		<radialGradient id="glow1" cx="0.1" cy="0" r="0.8"><stop offset="0" stop-color="#3d8bfd" stop-opacity="0.35"/><stop offset="1" stop-color="#3d8bfd" stop-opacity="0"/></radialGradient>
		<radialGradient id="glow2" cx="0.95" cy="0.2" r="0.7"><stop offset="0" stop-color="#ae3ec9" stop-opacity="0.32"/><stop offset="1" stop-color="#ae3ec9" stop-opacity="0"/></radialGradient>
		<linearGradient id="brand" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5c9dff"/><stop offset="1" stop-color="#c25be0"/></linearGradient>
	</defs>
	<rect width="${W}" height="${H}" fill="#0b0d11"/>
	<rect width="${W}" height="${H}" fill="url(#glow1)"/>
	<rect width="${W}" height="${H}" fill="url(#glow2)"/>
	<text x="72" y="236" font-family="${font}" font-size="30" font-weight="700" fill="#eef0f4">DMX Total Control</text>
	<text x="72" y="312" font-family="${font}" font-size="${size}" font-weight="800" fill="#ffffff">${a}</text>
	<text x="72" y="374" font-family="${font}" font-size="${size}" font-weight="800" fill="url(#brand)">${b}</text>
	<text x="72" y="560" font-family="${font}" font-size="24" font-weight="600" fill="#a6acb9">${foot}</text>
</svg>`);
}

const rounded = (w, h, r) =>
	Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h + r}" rx="${r}" fill="#fff"/></svg>`);

await mkdir(path.join(root, 'public/og'), { recursive: true });
const logo = await sharp(await readFile(path.join(root, 'src/assets/logo.svg')))
	.resize(96, 96)
	.png()
	.toBuffer();

for (const lang of Object.keys(text)) {
	// The screenshot bleeds off the right and bottom edges.
	const left = 640;
	const top = 160;
	const shotW = W - left;
	const shotH = H - top;
	const shot = await sharp(path.join(root, `src/assets/shots/${lang}/live.png`))
		.resize(820)
		.extract({ left: 0, top: 0, width: shotW, height: shotH })
		.composite([{ input: rounded(shotW, shotH, 16), blend: 'dest-in' }])
		.png()
		.toBuffer();
	const frame = Buffer.from(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${shotW}" height="${shotH}"><rect x="1" y="1" width="${shotW}" height="${shotH + 20}" rx="16" fill="none" stroke="#353b48" stroke-width="2"/></svg>`,
	);
	await sharp(await background(text[lang]))
		.composite([
			{ input: logo, left: 72, top: 96 },
			{ input: shot, left, top },
			{ input: frame, left, top },
		])
		.png({ compressionLevel: 9 })
		.toFile(path.join(root, `public/og/${lang}.png`));
	console.log(`make-og: public/og/${lang}.png`);
}
