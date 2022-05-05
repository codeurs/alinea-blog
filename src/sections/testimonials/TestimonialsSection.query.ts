import {fetchImage} from '../../server/fetchImage'
import {Pages} from '../../server/pages'
import {TestimonialsSectionSchema} from './TestimonialsSection.schema'

export async function testimonialsSectionQuery(
	pages: Pages,
	section: TestimonialsSectionSchema
) {
	return {
		...section,
		testimonials: await Promise.all(
			section.testimonials.map((testimonial) =>
				testimonialQuery(pages, testimonial)
			)
		)
	}
}

async function testimonialQuery(
	pages: Pages,
	testimonial: TestimonialsSectionSchema['testimonials'][number]
) {
	return {
		...testimonial,
		avatar: await fetchImage(pages, testimonial.avatar)
	}
}

export type TestimonialsSectionData = Awaited<
	ReturnType<typeof testimonialsSectionQuery>
>
export type TestimonialData = TestimonialsSectionData['testimonials'][number]
