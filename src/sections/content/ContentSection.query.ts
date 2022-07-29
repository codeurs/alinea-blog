import {Pages} from '@alinea/content/main'
import {ContentSectionSchema} from './ContentSection.schema'

export async function contentSectionQuery(
	pages: Pages,
	section: ContentSectionSchema
) {
	return {
		...section,
		text: await Promise.all(
			section.text.map((block) => blockQuery(pages, block))
		)
	}
}

export async function blockQuery(
	pages: Pages,
	block: ContentSectionSchema['text'][number]
) {
	return block
}

export type ContentData = Awaited<ReturnType<typeof contentSectionQuery>>
