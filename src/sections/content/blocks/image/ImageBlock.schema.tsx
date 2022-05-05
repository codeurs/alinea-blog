import {Schema, type} from '@alinea/core'
import {link} from '@alinea/input.link'

export const ImageBlockSchema = type('Image', {
	image: link('Link', {type: 'image', max: 1, inline: true})
})

export type ImageBlockSchema = Schema.TypeOf<typeof ImageBlockSchema>
