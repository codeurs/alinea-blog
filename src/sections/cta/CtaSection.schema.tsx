import {Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const CtaSectionSchema = type('CTA', {
	title: alinea.text('Title'),
	label: alinea.text('Label', {inline: true, width: 0.4}),
	link: alinea.link('Link', {
		type: ['entry', 'external'],
		max: 1,
		inline: true,
		width: 0.6
	})
})
export type CtaSectionSchema = Schema.TypeOf<typeof CtaSectionSchema>
