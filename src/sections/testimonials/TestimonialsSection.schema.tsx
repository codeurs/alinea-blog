import {Schema, type} from '@alinea/core'
import {link, list, richText, schema, text} from 'alinea'

export const TestimonialSchema = type('Testimonial', {
	quote: richText('Intro'),
	name: text('Name', {width: 0.33}),
	role: text('Role', {width: 0.33}),
	avatar: link('Image', {type: 'image', max: 1, width: 0.33})
})

export const TestimonialsSectionSchema = type('Testimonials', {
	title: text('Title'),
	testimonials: list('Testimonials', {
		schema: schema({
			Testimonial: TestimonialSchema
		}),
		inline: true
	})
})

export type TestimonialsSectionSchema = Schema.TypeOf<
	typeof TestimonialsSectionSchema
>
