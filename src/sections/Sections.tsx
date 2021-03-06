import {ContentSection} from './content/ContentSection'
import {CtaSection} from './cta/CtaSection'
import {HeroSection} from './hero/HeroSection'
import {PostsSection} from './posts/PostsSection'
import {RelatedSection} from './related/RelatedSection'
import {SectionData, SectionsData} from './Sections.query'
import {TestimonialsSection} from './testimonials/TestimonialsSection'

export const Sections: React.FC<{sections: SectionsData}> = ({sections}) => {
	return (
		<>
			{sections.map((section) => (
				<Section key={section.id} section={section} />
			))}
		</>
	)
}
export const Section: React.FC<{section: SectionData}> = ({section}) => {
	switch (section.type) {
		case 'Hero':
			return <HeroSection {...section} />
		case 'Content':
			return <ContentSection {...section} />
		case 'Testimonials':
			return <TestimonialsSection {...section} />
		case 'CTA':
			return <CtaSection {...section} />
		case 'Posts':
			return <PostsSection {...section} />
		case 'Related':
			return <RelatedSection {...section} />
	}
	return null
}
