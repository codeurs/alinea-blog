import {Pages} from '../../server/pages'
import {buttonBlockQuery} from './blocks/button/ButtonBlock.query'
import {imageBlockQuery} from './blocks/image/ImageBlock.query'
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
	switch (block.type) {
		case 'ImageBlock':
			return imageBlockQuery(pages, block as any)
		case 'ButtonBlock':
			return buttonBlockQuery(pages, block as any)
		default:
			return block
	}
}

export type ContentData = Awaited<ReturnType<typeof contentSectionQuery>>
