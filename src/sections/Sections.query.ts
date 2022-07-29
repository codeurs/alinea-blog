import {Pages} from '@alinea/content/main'
import {contentSectionQuery} from './content/ContentSection.query'
import {postsSectionQuery} from './posts/PostsSection.query'
import {relatedSectionQuery} from './related/RelatedSection.query'
import {SectionsSchema} from './Sections.schema'

export async function sectionsQuery(pages: Pages, sections: SectionsSchema) {
	return Promise.all(sections.map((section) => sectionQuery(pages, section)))
}

export async function sectionQuery(
	pages: Pages,
	section: SectionsSchema[number]
) {
	switch (section.type) {
		case 'Hero':
			return section
		case 'Content':
			return {...section, ...(await contentSectionQuery(pages, section))}
		case 'Testimonials':
			return section
		case 'CTA':
			return section
		case 'Posts':
			return {...section, ...(await postsSectionQuery(pages, section))}
		case 'Related':
			return {...section, ...(await relatedSectionQuery(pages, section))}
		default:
			return section
	}
}

export type SectionsData = SectionData[]
export type SectionData = Awaited<ReturnType<typeof sectionQuery>>
