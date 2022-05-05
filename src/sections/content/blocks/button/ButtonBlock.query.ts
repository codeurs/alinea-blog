import {fetchLink} from '../../../../server/fetchLinks'
import {Pages} from '../../../../server/pages'
import {ButtonBlockSchema} from './ButtonBlock.schema'

export async function buttonBlockQuery(pages: Pages, block: ButtonBlockSchema) {
	return {
		...block,
		link: await fetchLink(pages, block.link)
	}
}

export type ButtonBlockData = Awaited<ReturnType<typeof buttonBlockQuery>>
