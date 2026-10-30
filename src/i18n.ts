// The site's own pages (home, download, FAQ, news, legal) are in Spanish and
// English; the manual is in six languages. Pages in the other four languages
// link to the English pages until they are translated.

export type Lang = 'es' | 'en';
export type ManualLang = Lang | 'pt' | 'fr' | 'it' | 'de';
export const LANGS: Lang[] = ['es', 'en'];

export const REPO = 'https://github.com/joseramos1999/DMXTotalControl';
export const ISSUES = `${REPO}/issues/new/choose`;

/** Paths of each page in each language, without the base */
export const routes = {
	home: { es: '/', en: '/en/' },
	download: { es: '/descargar/', en: '/en/download/' },
	faq: { es: '/preguntas/', en: '/en/faq/' },
	news: { es: '/novedades/', en: '/en/news/' },
	legal: { es: '/legal/', en: '/en/legal/' },
} as const;
export type Route = keyof typeof routes;

/** A site path with the base in front (the base is /DMXTotalControl-web on GitHub Pages) */
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path}`;
}

export function pageUrl(route: Route, lang: Lang, hash = ''): string {
	return url(routes[route][lang]) + hash;
}

/** The manual, or one of its pages (`directo`), in a language */
export function manualUrl(lang: ManualLang, page = ''): string {
	return url(`${lang === 'es' ? '' : `/${lang}`}/manual/${page ? `${page}/` : ''}`);
}

/** The language of the site's pages for a manual language */
export function siteLang(lang: string): Lang {
	return lang.startsWith('es') ? 'es' : 'en';
}

const nav = {
	es: { features: 'Funciones', download: 'Descargar', manual: 'Manual', news: 'Novedades', faq: 'Preguntas', menu: 'Menú', home: 'Inicio' },
	en: { features: 'Features', download: 'Download', manual: 'Manual', news: 'News', faq: 'FAQ', menu: 'Menu', home: 'Home' },
	pt: { features: 'Funções', download: 'Baixar', manual: 'Manual', news: 'Novidades', faq: 'Perguntas', menu: 'Menu', home: 'Início' },
	fr: { features: 'Fonctions', download: 'Télécharger', manual: 'Manuel', news: 'Nouveautés', faq: 'Questions', menu: 'Menu', home: 'Accueil' },
	it: { features: 'Funzioni', download: 'Scarica', manual: 'Manuale', news: 'Novità', faq: 'Domande', menu: 'Menu', home: 'Home' },
	de: { features: 'Funktionen', download: 'Herunterladen', manual: 'Handbuch', news: 'Neuigkeiten', faq: 'Fragen', menu: 'Menü', home: 'Start' },
};

export function navStrings(lang: string) {
	const key = (Object.keys(nav) as (keyof typeof nav)[]).find((k) => lang.startsWith(k)) ?? 'en';
	return nav[key];
}

export const strings = {
	es: {
		tagline: 'Control DMX gratis, pensado para el directo',
		downloadFree: 'Descargar gratis',
		forWindows: 'para Windows 10 y 11',
		version: 'Versión',
		footerAbout: 'Control de iluminación DMX libre y gratuito para Windows.',
		program: 'Programa',
		community: 'Comunidad',
		legalTitle: 'Legal',
		source: 'Código fuente',
		reportBug: 'Informar de un fallo',
		suggest: 'Proponer una idea',
		roadmap: 'Hoja de ruta',
		legal: 'Aviso legal y privacidad',
		license: 'Licencia Apache 2.0',
		credits: 'Créditos',
		skip: 'Saltar al contenido',
		language: 'Idioma',
	},
	en: {
		tagline: 'Free DMX control, made for live shows',
		downloadFree: 'Download free',
		forWindows: 'for Windows 10 and 11',
		version: 'Version',
		footerAbout: 'Free and open-source DMX lighting control for Windows.',
		program: 'Program',
		community: 'Community',
		legalTitle: 'Legal',
		source: 'Source code',
		reportBug: 'Report a bug',
		suggest: 'Suggest an idea',
		roadmap: 'Roadmap',
		legal: 'Legal notice and privacy',
		license: 'Apache License 2.0',
		credits: 'Credits',
		skip: 'Skip to content',
		language: 'Language',
	},
};

/** Dates as the reader writes them: 27 de octubre de 2026 / 27 October 2026 */
export function formatDate(date: string, lang: Lang): string {
	return new Date(`${date}T12:00:00Z`).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

export function formatSize(bytes: number, lang: Lang): string {
	return `${Math.round(bytes / 1048576).toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB')} MB`;
}
