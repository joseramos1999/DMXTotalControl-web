import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	// The manual, copied from the program's repository by scripts/sync-app.mjs
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Release notes: es/ comes from docs/novedades in the program's repository,
	// en/ is translated here.
	novedades: defineCollection({
		loader: glob({ pattern: '*/*.md', base: './src/content/novedades' }),
		schema: z.object({
			title: z.string(),
			version: z.string(),
			date: z.string().optional(),
		}),
	}),
};
