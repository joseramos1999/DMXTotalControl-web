// Draws the images that social networks show when someone shares the site
// (1200 × 630, public/og/es.png and en.png): the logo, the name, the tagline
// and a screenshot of the Live page. Run it again after changing the tagline
// or the screenshots: `node scripts/make-og.mjs`.
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const text = {
	es: { a: 'Control DMX gratis,', b: 'pensado para el directo', foot: 'Libre · Windows 10 y 11 · 6 idiomas' },
	en: { a: 'Free DMX control,', b: 'made for live shows', foot: 'Open source · Windows 10 and 11 · 6 languages' },
};

const font = "'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif";

function background({ a, b, foot }) {
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
	<text x="72" y="312" font-family="${font}" font-size="50" font-weight="800" fill="#ffffff">${a}</text>
	<text x="72" y="374" font-family="${font}" font-size="50" font-weight="800" fill="url(#brand)">${b}</text>
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
	await sharp(background(text[lang]))
		.composite([
			{ input: logo, left: 72, top: 96 },
			{ input: shot, left, top },
			{ input: frame, left, top },
		])
		.png({ compressionLevel: 9 })
		.toFile(path.join(root, `public/og/${lang}.png`));
	console.log(`make-og: public/og/${lang}.png`);
}
