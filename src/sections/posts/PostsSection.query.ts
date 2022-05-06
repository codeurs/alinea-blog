import {Pages} from '../../server/pages'
import {Article} from '../../server/schema'
import {HeroSectionSchema} from '../hero/HeroSection.schema'
import {PostsSectionSchema} from './PostsSection.schema'

export async function postsSectionQuery(
	pages: Pages,
	block: PostsSectionSchema
) {
	const posts = await await pages.all().whereType(Article)
	posts.sort((a, b) => a.index.localeCompare(b.index)).slice(0, 5)

	return {
		...block,
		posts: posts.map((post) => {
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
