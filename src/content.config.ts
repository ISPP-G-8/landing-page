import  { defineCollection, z } from 'astro:content';

const features = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    stack: z.enum(['Fullstack', 'Frontend', 'Backend']),
    image: z.string(),
    links: z.array(z.string().url()),
  }),
});

export const collections = {
  features,
  team,
}
