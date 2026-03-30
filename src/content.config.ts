import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string().max(165),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
  }),
});

const expertise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expertise' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string().max(165),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string().max(165),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = { services, expertise, industries };
