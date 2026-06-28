import { getCollection } from 'astro:content';

// 발행된 글만, 최신순으로
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    // prod 빌드에서는 draft 제외, 로컬 dev에서는 다 보이게
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}