import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Web'),
    status: z.enum(['ONLINE', 'IN ORBIT', 'PROTOTYPE', 'ARCHIVED']).default('ONLINE'),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
  }),
});

export const collections = { posts, projects };
