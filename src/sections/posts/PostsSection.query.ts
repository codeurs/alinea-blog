import {Pages} from '../../server/pages'
import {Article} from '../../server/schema'
import {HeroSectionSchema} from '../hero/HeroSection.schema'
import {PostsSectionSchema} from './PostsSection.schema'

export async function postsSectionQuery(
	pages: Pages,
	block: PostsSectionSchema
) {
	const posts = await pages.all().skip(0).take(5).whereType(Article)

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
