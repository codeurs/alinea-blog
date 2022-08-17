import {Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const HeroSectionSchema = type('Hero', {
	title: alinea.text('Title'),
	intro: alinea.richText('Intro'),
	image: alinea.link.image('Image', {type: 'image', max: 1}),
	buttons: alinea.list('CTA buttons', {
		schema: alinea.schema({
			CTA: type('Button', {
				mode: alinea.select(
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
				label: alinea.text('Label', {
					inline: true,
					width: 0.4
				}),
				link: alinea.link('Link', {
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
