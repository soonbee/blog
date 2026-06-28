import { OGImageRoute } from 'astro-og-canvas';
import { getPublishedPosts } from '../../lib/posts';

// 발행된 글만 OG 카드 생성 (draft 제외)
const posts = await getPublishedPosts();
const pages = Object.fromEntries(posts.map((post) => [post.id, post.data]));

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  // path: 'first-post' → 이미지 URL: /og/first-post.png
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    // 배경 단색
    bgGradient: [[83, 74, 184]],
    border: { color: [255, 255, 255], width: 12, side: 'inline-start' },
    padding: 60,
    font: {
      // 제목·설명 모두 흰색으로 통일
      title: { color: [255, 255, 255], weight: 'Bold', families: ['Noto Sans KR'] },
      description: { color: [255, 255, 255], families: ['Noto Sans KR'] },
    },
    // 한글+라틴 모두 커버 (라틴 전용 기본 폰트는 한글이 깨짐).
    // 빌드 타임에 fontsource에서 받아 node_modules/.astro-og-canvas에 캐시됨.
    fonts: [
      'https://api.fontsource.org/v1/fonts/noto-sans-kr/korean-700-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-kr/korean-400-normal.ttf',
    ],
  }),
});
