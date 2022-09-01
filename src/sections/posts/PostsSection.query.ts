import { Article, Pages } from '@alinea/content/main'
import { HeroSectionSchema } from '../hero/HeroSection.schema'
import { PostsSectionSchema } from './PostsSection.schema'

export async function postsSectionQuery(
	pages: Pages,
	block: PostsSectionSchema
) {
	const posts: Article[] = await pages.whereType('Article')
	posts.sort((a, b) => a.alinea.index.localeCompare(b.alinea.index))

	return {
		...block,
		posts: posts.slice(0, 6).map((post) => {
			const hero = post.sections.find(
				(section) => section.type === 'Hero'
			) as HeroSectionSchema

			return {
				id: post.id,
				title: post.title,
				description: hero?.intro || '',
				date: post.date,
				url: post.url,
				tag: post.tag
			}
		})
	}
}

export type PostsSectionData = Awaited<ReturnType<typeof postsSectionQuery>>
