import {fetchImage} from '../../server/fetchImage'
import {fetchLink} from '../../server/fetchLinks'
import {Pages} from '../../server/pages'
import {HeroSectionSchema} from './HeroSection.schema'

export async function heroSectionQuery(
	pages: Pages,
	section: HeroSectionSchema
) {
	return {
		...section,
		image: await fetchImage(pages, section.image),
		buttons: await Promise.all(
			section.buttons.map(async (button) => ({
				mode: button.mode || null,
				label: button.label || null,
				link: await fetchLink(pages, button.link)
			}))
		)
	}
}

export type HeroSectionData = Awaited<ReturnType<typeof heroSectionQuery>>
