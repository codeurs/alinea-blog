import {Schema, type} from '@alinea/core'
import {link, list, richText, schema, select, text} from 'alinea'

export const HeroSectionSchema = type('Hero', {
	title: text('Title'),
	intro: richText('Intro'),
	image: link.image('Image', {type: 'image', max: 1}),
	buttons: list('CTA buttons', {
		schema: schema({
			CTA: type('Button', {
				mode: select(
					'Mode',
					{
						primary: 'Primary',
						secondary: 'Secondary'
					},
					{
						initialValue: 'primary',
						optional: false
					}
				),
				label: text('Label', {
					inline: true,
					width: 0.4
				}),
				link: link('Link', {
					type: ['entry', 'external'],
					max: 1,
					width: 0.6,
					inline: true
				})
			})
		}),
		inline: true
	})
})
export type HeroSectionSchema = Schema.TypeOf<typeof HeroSectionSchema>
