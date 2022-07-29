import {Article, Pages} from '@alinea/content/main'
import {HeroSectionSchema} from '../hero/HeroSection.schema'
import {RelatedSectionSchema} from './RelatedSection.schema'

export async function relatedSectionQuery(
	pages: Pages,
	block: RelatedSectionSchema
) {
	const posts: Article[] = await pages.whereType('Article')
	posts.sort((a, b) => a.index.localeCompare(b.index))

	return {
		...block,
		posts: posts.slice(0, 2).map((post) => {
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

export type RelatedSectionData = Awaited<ReturnType<typeof relatedSectionQuery>>
