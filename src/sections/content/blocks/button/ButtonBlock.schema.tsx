import {Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const ButtonBlockSchema = type('Button', {
	label: alinea.text('Label', {inline: true, width: 0.4}),
	link: alinea.link('Link', {
		type: ['entry', 'external'],
		max: 1,
		inline: true,
		width: 0.6
	})
})

export type ButtonBlockSchema = Schema.TypeOf<typeof ButtonBlockSchema>
