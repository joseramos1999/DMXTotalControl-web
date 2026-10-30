// The brand kit in public/marca/ (served at /marca/): the icon in colour,
// white and black, the logo (icon + name) for dark and light backgrounds,
// the «Hecho con DMX Total Control» badge and the image GitHub shows when the
// repository is shared. The name is set in Segoe UI Bold, the program's own
// font, so this needs Windows (or Segoe UI installed). See MARCA.md.
//
// node scripts/make-brand.mjs
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public/marca');
await mkdir(out, { recursive: true });

const DARK = '#0b0d11';
const LIGHT_TEXT = '#0e1014';
const NAME_FONT = 'Segoe UI Bold';
const SMALL_FONT = 'Segoe UI Semibold';

// The letters of the icon (dtc/icons/dtc-icon.svg in the program), 256 × 256
const letters = `
	<path d="M44,81 H49 A35,35 0 0 1 49,151 H44 Z" stroke-linejoin="miter"/>
	<path d="M103,81 H159 M131,81 V162" stroke-linecap="butt"/>
	<path d="M223,81 H213 A35,35 0 0 0 213,151 H223" stroke-linecap="butt"/>`;

const gradient = `<linearGradient id="brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d8bfd"/><stop offset="1" stop-color="#ae3ec9"/></linearGradient>`;

/** The icon's inner SVG (no <svg>), so it can be placed inside other drawings */
function iconBody(kind) {
	if (kind === 'color') {
		return `<defs>${gradient}</defs>
	<rect x="8" y="8" width="240" height="240" rx="56" fill="url(#brand)"/>
	<g fill="none" stroke="#ffffff" stroke-width="22">${letters}</g>
	<rect x="58" y="176" width="140" height="12" rx="6" fill="#ffffff" fill-opacity="0.7"/>`;
	}
	// One colour: the square in that colour with the letters cut out.
	const fill = kind === 'white' ? '#ffffff' : '#000000';
	return `<defs><mask id="cut-${kind}">
		<rect width="256" height="256" fill="#ffffff"/>
		<g fill="none" stroke="#000000" stroke-width="22">${letters}</g>
		<rect x="58" y="176" width="140" height="12" rx="6" fill="#000000"/>
	</mask></defs>
	<rect x="8" y="8" width="240" height="240" rx="56" fill="${fill}" mask="url(#cut-${kind})"/>`;
}

const iconSvg = (kind) =>
	`<?xml version="1.0" encoding="UTF-8"?>
<!-- DMX Total Control: the icon (${kind}). Apache License 2.0 -->
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
	${iconBody(kind)}
</svg>
`;

/** A line of text as an image, measured by the font itself */
async function text(content, font, color) {
	const escaped = content.replace(/&/g, '&amp;').replace(/</g, '&lt;');
	const { data, info } = await sharp({
		text: { text: `<span foreground="${color}">${escaped}</span>`, font, rgba: true, dpi: 72 },
	})
		.png()
		.toBuffer({ resolveWithObject: true });
	return { input: data, width: info.width, height: info.height };
}

async function png(svg, file, width) {
	await sharp(Buffer.from(svg)).resize(width).png({ compressionLevel: 9 }).toFile(path.join(out, file));
}

// 1. The icon
await copyFile(path.join(root, 'src/assets/logo.svg'), path.join(out, 'dtc-icono.svg'));
for (const [kind, name] of [['white', 'blanco'], ['black', 'negro']]) {
	await writeFile(path.join(out, `dtc-icono-${name}.svg`), iconSvg(kind));
}
for (const [kind, name] of [['color', 'dtc-icono'], ['white', 'dtc-icono-blanco'], ['black', 'dtc-icono-negro']]) {
	await png(iconSvg(kind), `${name}-512.png`, 512);
}

// 2. The logo: icon + name, on a transparent background
async function logo(file, textColor) {
	const icon = 200;
	const pad = 40;
	const name = await text('DMX Total Control', `${NAME_FONT} 112`, textColor);
	const gap = 48;
	const width = pad + icon + gap + name.width + pad;
	const height = pad + icon + pad;
	const iconPng = await sharp(Buffer.from(iconSvg('color'))).resize(icon).png().toBuffer();
	await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
		.composite([
			{ input: iconPng, left: pad, top: pad },
			{ input: name.input, left: pad + icon + gap, top: Math.round((height - name.height) / 2) },
		])
		.png({ compressionLevel: 9 })
		.toFile(path.join(out, file));
}
await logo('dtc-logo-fondo-oscuro.png', '#ffffff');
await logo('dtc-logo-fondo-claro.png', LIGHT_TEXT);

// 3. The badge for users' videos, posters and websites, in two languages and
// for dark and light backgrounds. The PNG is twice the size of the SVG.
const badges = {
	es: { small: 'Hecho con', file: 'hecho-con-dtc' },
	en: { small: 'Made with', file: 'made-with-dtc' },
	pt: { small: 'Feito com', file: 'feito-com-dtc' },
	fr: { small: 'Fait avec', file: 'fait-avec-dtc' },
	it: { small: 'Fatto con', file: 'fatto-con-dtc' },
	de: { small: 'Gemacht mit', file: 'gemacht-mit-dtc' },
};
for (const [lang, b] of Object.entries(badges)) {
	for (const theme of ['oscuro', 'claro']) {
		const dark = theme === 'oscuro';
		const bg = dark ? '#161920' : '#ffffff';
		const border = dark ? '#353b48' : '#d5d9e0';
		const big = dark ? '#ffffff' : LIGHT_TEXT;
		const small = dark ? '#a6acb9' : '#4f5665';
		// Measure the two lines at 2× to size the badge
		const line1 = await text(b.small, `${SMALL_FONT} 26`, small);
		const line2 = await text('DMX Total Control', `${NAME_FONT} 36`, big);
		const h = 112;
		const icon = 72;
		const left = 20;
		const textX = left + icon + 20;
		const w = textX + Math.max(line1.width, line2.width) + 28;
		const svg = (scale) => {
			const s = (v) => Math.round(v / scale);
			return `<?xml version="1.0" encoding="UTF-8"?>
<!-- «${b.small} DMX Total Control», for a ${dark ? 'dark' : 'light'} background. Apache License 2.0 -->
<svg xmlns="http://www.w3.org/2000/svg" width="${s(w)}" height="${s(h)}" viewBox="0 0 ${w} ${h}">
	<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="${h / 2 - 1}" fill="${bg}" stroke="${border}" stroke-width="2"/>
	<g transform="translate(${left} ${(h - icon) / 2}) scale(${icon / 256})">${iconBody('color')}</g>
	<text x="${textX}" y="48" font-family="'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="25" font-weight="600" fill="${small}" textLength="${line1.width}" lengthAdjust="spacingAndGlyphs">${b.small}</text>
	<text x="${textX}" y="84" font-family="'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="700" fill="${big}" textLength="${line2.width}" lengthAdjust="spacingAndGlyphs">DMX Total Control</text>
</svg>
`;
		};
		await writeFile(path.join(out, `${b.file}-${theme}.svg`), svg(2));
		// The PNG with the real font, not the SVG's fallbacks
		const base = Buffer.from(svg(1).replace(/<text[\s\S]*?<\/text>\s*/g, ''));
		await sharp(base)
			.composite([
				{ input: line1.input, left: textX, top: 48 - 26 },
				{ input: line2.input, left: textX, top: 84 - 36 },
			])
			.png({ compressionLevel: 9 })
			.toFile(path.join(out, `${b.file}-${theme}.png`));
	}
}

// 4. GitHub's social preview (Settings › Social preview), 1280 × 640
{
	const W = 1280;
	const H = 640;
	const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
	<defs>
		<radialGradient id="g1" cx="0.15" cy="0" r="0.8"><stop offset="0" stop-color="#3d8bfd" stop-opacity="0.4"/><stop offset="1" stop-color="#3d8bfd" stop-opacity="0"/></radialGradient>
		<radialGradient id="g2" cx="0.9" cy="1" r="0.8"><stop offset="0" stop-color="#ae3ec9" stop-opacity="0.35"/><stop offset="1" stop-color="#ae3ec9" stop-opacity="0"/></radialGradient>
	</defs>
	<rect width="${W}" height="${H}" fill="${DARK}"/>
	<rect width="${W}" height="${H}" fill="url(#g1)"/>
	<rect width="${W}" height="${H}" fill="url(#g2)"/>
</svg>`);
	const icon = await sharp(Buffer.from(iconSvg('color'))).resize(176).png().toBuffer();
	const name = await text('DMX Total Control', `${NAME_FONT} 88`, '#ffffff');
	const line = await text('Control DMX libre y gratuito · Free and open-source DMX control', `${SMALL_FONT} 34`, '#a6acb9');
	const line2 = await text('Windows 10 / 11 · ES · EN · PT · FR · IT · DE', `${SMALL_FONT} 30`, '#7d8494');
	const top = 120;
	await sharp(bg)
		.composite([
			{ input: icon, left: Math.round((W - 176) / 2), top },
			{ input: name.input, left: Math.round((W - name.width) / 2), top: top + 176 + 40 },
			{ input: line.input, left: Math.round((W - line.width) / 2), top: top + 176 + 40 + name.height + 24 },
			{ input: line2.input, left: Math.round((W - line2.width) / 2), top: top + 176 + 40 + name.height + 24 + line.height + 18 },
		])
		.png({ compressionLevel: 9 })
		.toFile(path.join(out, 'github-social.png'));
}

console.log('make-brand: public/marca/ al día');
