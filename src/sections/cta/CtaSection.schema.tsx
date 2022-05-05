import {Schema, type} from '@alinea/core'
import {link, text} from 'alinea'

export const CtaSectionSchema = type('CTA', {
	title: text('Title'),
	label: text('Label', {inline: true, width: 0.4}),
	link: link('Link', {
		type: ['entry', 'external'],
		max: 1,
		inline: true,
		width: 0.6
	})
})
export type CtaSectionSchema = Schema.TypeOf<typeof CtaSectionSchema>
