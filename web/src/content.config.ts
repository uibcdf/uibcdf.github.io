import { defineCollection, z } from 'astro:content';

const canonicalTags = z.enum([
  'seminar',
  'news',
  'publication',
  'software',
  'event',
  'opportunity',
]);

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(canonicalTags).default([]),
  summary: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().optional(),
});

const updates = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const people = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const research = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const publications = defineCollection({
  type: 'content',
  schema: baseSchema,
});

export const collections = {
  updates,
  people,
  research,
  publications,
};
