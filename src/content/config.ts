import { defineCollection, z } from "astro:content";
import { SITE } from "../constants";

const docs = defineCollection({
  schema: z.object({
    author: z.object({
      name: z.string(),
      image: z.string(),
      twitterName: z.string(),
    }),
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    lang: z.literal("en-us").default(SITE.defaultLanguage),
    video: z.string().default(""),
  }),
});

export const collections = { docs };
