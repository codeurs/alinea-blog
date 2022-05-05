import {Schema, schema, type} from '@alinea/core'
import {richText} from '@alinea/input.richtext'
import {ButtonBlockSchema} from './blocks/button/ButtonBlock.schema'
import {ImageBlockSchema} from './blocks/image/ImageBlock.schema'

export const ContentSectionSchema = type('Body', {
	text: richText('Text', {
		blocks: schema({
			ButtonBlock: ButtonBlockSchema,
			ImageBlock: ImageBlockSchema
		}),
		inline: true
	})
})
export type ContentSectionSchema = Schema.TypeOf<typeof ContentSectionSchema>
