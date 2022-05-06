import {Schema, type} from '@alinea/core'
import {text} from 'alinea'

export const RelatedSectionSchema = type('Related', {
	title: text('Title')
})
export type RelatedSectionSchema = Schema.TypeOf<typeof RelatedSectionSchema>
