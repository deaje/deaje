import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // "code" for technical pieces, "life" for personal ones.
    kind: z.enum(['code', 'life']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Sample content that should be replaced before launch. Shows a visible badge.
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { posts };
