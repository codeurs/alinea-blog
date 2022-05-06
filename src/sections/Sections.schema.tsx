import {Schema, schema} from '@alinea/core'
import {list} from '@alinea/input.list'
import {ContentSectionSchema} from './content/ContentSection.schema'
import {CtaSectionSchema} from './cta/CtaSection.schema'
import {HeroSectionSchema} from './hero/HeroSection.schema'
import {PostsSectionSchema} from './posts/PostsSection.schema'
import {RelatedSectionSchema} from './related/RelatedSection.schema'
import {TestimonialsSectionSchema} from './testimonials/TestimonialsSection.schema'

export const SectionsSchema = list('Sections', {
	schema: schema({
		Hero: HeroSectionSchema,
		CTA: CtaSectionSchema,
		Content: ContentSectionSchema,
		Testimonials: TestimonialsSectionSchema,
		Posts: PostsSectionSchema,
		Related: RelatedSectionSchema
	})
})

export type SectionsSchema = Schema.TypeOf<typeof SectionsSchema>
