// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.soonjae.xyz',
	markdown: {
		shikiConfig: {
			// light/dark 두 테마 → 토큰마다 --shiki-light / --shiki-dark CSS 변수로 출력
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			// 기본 색을 박지 않음 → 색 선택은 global.css가 data-theme 기준으로 결정 (8단계 연동)
			defaultColor: false,
			// 긴 줄 가로 스크롤 대신 줄바꿈
			wrap: true,
		},
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
