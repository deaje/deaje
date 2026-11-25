import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib';
import { SITE } from '../config';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} · journal`,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
      categories: [post.data.kind, ...post.data.tags],
    })),
    customData: `<language>en</language>`,
  });
}
