import {Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const TestimonialSchema = type('Testimonial', {
	quote: alinea.richText('Intro'),
	name: alinea.text('Name', {width: 0.33}),
	role: alinea.text('Role', {width: 0.33}),
	avatar: alinea.link.image('Image', {type: 'image', max: 1, width: 0.33})
})

export const TestimonialsSectionSchema = type('Testimonials', {
	title: alinea.text('Title'),
	testimonials: alinea.list('Testimonials', {
		schema: alinea.schema({
			Testimonial: TestimonialSchema
		}),
		inline: true
	})
})

export type TestimonialsSectionSchema = Schema.TypeOf<
	typeof TestimonialsSectionSchema
>
