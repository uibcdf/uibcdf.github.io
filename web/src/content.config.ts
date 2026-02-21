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

const emptyStringToUndefined = (value: unknown) => {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed.length === 0 ? undefined : trimmed;
};

const optionalUrlField = z.preprocess(emptyStringToUndefined, z.string().url().optional());

const updates = defineCollection({
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

const publicationPapers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    // Legacy key kept for backwards compatibility with older entries.
    doi: optionalUrlField,
    print: optionalUrlField,
    Print: optionalUrlField,
    preprint: optionalUrlField,
    Preprint: optionalUrlField,
    bodyImageWidth: z.number().min(20).max(100).optional(),
    thumbnailAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const softwareTools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    github: z.string().url(),
    docs: z.string().url().optional(),
    thumbnailAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  updates,
  'people-profiles': peopleProfiles,
  'research-lines': researchLines,
  'publication-papers': publicationPapers,
  'software-tools': softwareTools,
};
