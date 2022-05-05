import {fetchLink} from '../../server/fetchLinks'
import {Pages} from '../../server/pages'
import {CtaSectionSchema} from './CtaSection.schema'

export async function ctaSectionQuery(pages: Pages, block: CtaSectionSchema) {
	return {
		...block,
		link: await fetchLink(pages, block.link)
	}
}

export type CtaSectionData = Awaited<ReturnType<typeof ctaSectionQuery>>
