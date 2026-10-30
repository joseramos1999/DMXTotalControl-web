// The site in six languages. Spanish lives at the root with Spanish addresses
// (/descargar/); every other language under its code with English addresses
// (/en/download/, /pt/download/…). The texts are in src/i18n/<lang>.ts, and
// links inside them use short schemes (manual:salidas, page:download…) that
// html() turns into real addresses for the reader's language. The address
// tables are in src/routes.mjs.

import es from './i18n/es';
import en from './i18n/en';
import pt from './i18n/pt';
import fr from './i18n/fr';
import it from './i18n/it';
import de from './i18n/de';
import {
	GUIDE_SLUGS,
	SEGMENT_SLUGS,
	SLUGS,
	guidePath as guidePathOf,
	manualPath,
	resolveScheme,
	routePath as routePathOf,
	segmentPath as segmentPathOf,
} from './routes.mjs';

export { COMPAT_REPORT, ISSUES, RELEASES, REPO } from './routes.mjs';

export type Dict = typeof es;
export type Lang = 'es' | 'en' | 'pt' | 'fr' | 'it' | 'de';
export const LANGS: Lang[] = ['es', 'en', 'pt', 'fr', 'it', 'de'];
/** The languages that are not at the root */
export const PREFIXED: Exclude<Lang, 'es'>[] = ['en', 'pt', 'fr', 'it', 'de'];

const dicts: Record<Lang, Dict> = { es, en, pt, fr, it, de };
export function dict(lang: Lang): Dict {
	return dicts[lang];
}

export type Route = keyof typeof SLUGS;
export type Segment = keyof typeof SEGMENT_SLUGS;
export const SEGMENTS = Object.keys(SEGMENT_SLUGS) as Segment[];
export type Guide = keyof typeof GUIDE_SLUGS;
export const GUIDES = Object.keys(GUIDE_SLUGS) as Guide[];

/** A site path with the base in front (empty on dmxtotalcontrol.com) */
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path}`;
}

export const routePath = (route: Route, lang: Lang): string => routePathOf(route, lang);
export const segmentPath = (seg: Segment, lang: Lang): string => segmentPathOf(seg, lang);
export const guidePath = (guide: Guide, lang: Lang): string => guidePathOf(guide, lang);

export function pageUrl(route: Route, lang: Lang, hash = ''): string {
	return url(routePath(route, lang)) + hash;
}

/** The slug of a guide in a language (the last part of its address) */
export function guideSlug(guide: Guide, lang: Lang): string {
	return GUIDE_SLUGS[guide][lang === 'es' ? 0 : 1];
}

const perLang = (path: (lang: Lang) => string) =>
	Object.fromEntries(LANGS.map((l) => [l, path(l)])) as Record<Lang, string>;

/** The address of a page in each language, for the language menu and hreflang */
export const routePaths = (route: Route) => perLang((l) => routePath(route, l));
export const segmentPaths = (seg: Segment) => perLang((l) => segmentPath(seg, l));
export const guidePaths = (guide: Guide) => perLang((l) => guidePath(guide, l));

/** Fills {name} placeholders */
export function fill(text: string, vars: Record<string, string>): string {
	return text.replace(/\{(\w+)\}/g, (all, key) => vars[key] ?? all);
}

/** The site language for a manual locale (pt-BR → pt) */
export function siteLang(lang: string): Lang {
	return LANGS.find((l) => lang.startsWith(l)) ?? 'en';
}

/** The manual, or one of its pages (`directo`), in a language */
export function manualUrl(lang: string, page = ''): string {
	return url(manualPath(siteLang(lang), page));
}

/** Real address for a link written in the texts (see src/routes.mjs) */
export function resolveHref(href: string, lang: Lang): string {
	const r = resolveScheme(href, lang);
	if (!r) return href;
	return 'path' in r ? url(r.path) : r.external;
}

/** The HTML of a text with its links resolved */
export function html(text: string, lang: Lang): string {
	return text.replace(/href="([^"]+)"/g, (_, href) => `href="${resolveHref(href, lang)}"`);
}

/** Dates as the reader writes them: 27 de octubre de 2026 / 27 October 2026 */
export function formatDate(date: string, lang: Lang): string {
	return new Date(`${date}T12:00:00Z`).toLocaleDateString(dict(lang).meta.locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

export function formatSize(bytes: number, lang: Lang): string {
	return `${Math.round(bytes / 1048576).toLocaleString(dict(lang).meta.locale)} MB`;
}
