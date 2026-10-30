import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const publishedPosts = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ? String(context.site) : siteConfig.siteUrl,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>vi-vn</language>`,
  });
}
