import {Reference} from '@alinea/core'
import {Pages} from './pages'

export type LinkData = {
	internal: boolean
	href: string
}

export const fetchLinks = async (
	pages: Pages,
	links: (Reference.Entry | Reference.Url)[]
): Promise<LinkData[]> => {
	return Promise.all(
		links.map(async (link) => {
			if (link.type === 'url') {
				return {internal: false, href: link.url}
			}
			const page = await pages.findFirst((page) => page.id.is(link.entry))
			if (!page) return {internal: true, href: ''}
			return {internal: true, href: page.url}
		})
	)
}

export const fetchLink = async (
	pages: Pages,
	links: (Reference.Entry | Reference.Url)[]
): Promise<LinkData | null> => {
	const results = await fetchLinks(pages, links)
	return results[0] || null
}
