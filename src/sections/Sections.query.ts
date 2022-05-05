import {Pages} from '../server/pages'
import {contentSectionQuery} from './content/ContentSection.query'
import {ctaSectionQuery} from './cta/CtaSection.query'
import {heroSectionQuery} from './hero/HeroSection.query'
import {SectionsSchema} from './Sections.schema'
import {testimonialsSectionQuery} from './testimonials/TestimonialsSection.query'

export async function sectionsQuery(pages: Pages, sections: SectionsSchema) {
	return Promise.all(sections.map((section) => sectionQuery(pages, section)))
}

export async function sectionQuery(
	pages: Pages,
	section: SectionsSchema[number]
) {
	switch (section.type) {
		case 'Hero':
			return {...section, ...(await heroSectionQuery(pages, section))}
		case 'Content':
			return {...section, ...(await contentSectionQuery(pages, section))}
		case 'Testimonials':
			return {...section, ...(await testimonialsSectionQuery(pages, section))}
		case 'CTA':
			return {...section, ...(await ctaSectionQuery(pages, section))}
		default:
			return section
	}
}

export type SectionsData = SectionData[]
export type SectionData = Awaited<ReturnType<typeof sectionQuery>>
