import  { defineCollection, z } from 'astro:content';

const features = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  features,
}
