import {Schema, type} from '@alinea/core'
import {link} from '@alinea/input.link'
import {text} from 'alinea'

export const ButtonBlockSchema = type('Button', {
	label: text('Label', {inline: true, width: 0.4}),
	link: link('Link', {
		type: ['entry', 'external'],
		max: 1,
		inline: true,
		width: 0.6
	})
})

export type ButtonBlockSchema = Schema.TypeOf<typeof ButtonBlockSchema>
