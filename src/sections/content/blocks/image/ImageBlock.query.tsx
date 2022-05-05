import {fetchImage} from '../../../../server/fetchImage'
import {Pages} from '../../../../server/pages'
import {ImageBlockSchema} from './ImageBlock.schema'

export async function imageBlockQuery(pages: Pages, block: ImageBlockSchema) {
	return {
		...block,
		image: await fetchImage(pages, block.image)
	}
}

export type ImageBlockData = Awaited<ReturnType<typeof imageBlockQuery>>
