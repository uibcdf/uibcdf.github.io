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

const peopleProfiles = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    expertise: z.string(),
    affiliation: z.string(),
    linkedin: z.string().url().optional(),
    x: z.string().url().optional(),
    github: z.string().url().optional(),
    orcid: z.string().url().optional(),
    scholar: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const researchLines = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    bodyImageWidth: z.number().min(20).max(100).optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: baseSchema,
});

export const collections = {
  updates,
  people,
  'people-profiles': peopleProfiles,
  research,
  'research-lines': researchLines,
  publications,
};
