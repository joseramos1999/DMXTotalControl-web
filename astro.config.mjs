// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

// Where the site is published. Until the domain exists it is GitHub Pages
// (https://joseramos1999.github.io/DMXTotalControl-web/); the deploy workflow
// takes both from the Pages settings, so a custom domain only changes them there.
const site = process.env.SITE_URL || 'https://joseramos1999.github.io';
const base = process.env.BASE_PATH ?? '/DMXTotalControl-web';

// The manual's languages; the site's own pages are in Spanish and English for now.
const manualOnly = ['pt', 'fr', 'it', 'de'];

export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	// The manual in Portuguese, French, Italian and German has no home page of its own yet.
	redirects: Object.fromEntries(manualOnly.map((lang) => [`/${lang}/`, `${base}/${lang}/manual/`])),
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: ['400 800'],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
	integrations: [
		starlight({
			title: 'DMX Total Control',
			description: 'Control de iluminación DMX libre y gratuito para Windows, pensado para el directo.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
				en: { label: 'English', lang: 'en' },
				pt: { label: 'Português', lang: 'pt-BR' },
				fr: { label: 'Français', lang: 'fr' },
				it: { label: 'Italiano', lang: 'it' },
				de: { label: 'Deutsch', lang: 'de' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/joseramos1999/DMXTotalControl' }],
			sidebar: [
				{
					label: 'Manual',
					translations: { fr: 'Manuel', it: 'Manuale', de: 'Handbuch' },
					items: [{ autogenerate: { directory: 'manual' } }],
				},
			],
			customCss: ['./src/styles/starlight.css'],
			components: {
				Head: './src/components/starlight/Head.astro',
				Header: './src/components/starlight/Header.astro',
			},
		}),
	],
});
