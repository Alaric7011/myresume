import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), summary: z.string(),
    cover: z.string().default('/placeholder.svg'),
    order: z.number(), featured: z.boolean().default(false),
    tags: z.array(z.string()), status: z.enum(['Live', 'Source only']),
    liveUrl: z.string().optional(), repoUrl: z.string().optional(), date: z.string(),
  }),
});
export const collections = { projects };
