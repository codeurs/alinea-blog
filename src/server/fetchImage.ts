import {Media, Reference} from '@alinea/core'
import {Pages} from './pages'

export type ImageData = {
	src: string
	alt: string
	width: number
	height: number
	blurHash?: string
}

export const fetchImages = async (
	pages: Pages,
	links: (Reference.Entry | Reference.Url)[]
): Promise<ImageData[]> => {
	const ids = (links || [])
		.filter((link): link is Reference.Entry => link.type === 'entry')
		.map((link) => link.entry)
	const images = await pages
		.findMany((page) => page.id.isIn(ids))
		.whereType(Media.File)

	return images.map<ImageData>((image) => ({
		src: image.location,
		alt: '',
		width: image.width!,
		height: image.height!,
		hash: image.hash,
		blurHash: image.blurHash!
	}))
}

export const fetchImage = async (
	pages: Pages,
	links: (Reference.Entry | Reference.Url)[]
): Promise<ImageData | null> => {
	const images = await fetchImages(pages, links)
	return images[0] || null
}
