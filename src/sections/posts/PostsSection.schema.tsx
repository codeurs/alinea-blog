import {Schema, type} from '@alinea/core'
import {text} from 'alinea'

export const PostsSectionSchema = type('Posts', {
	title: text('Title')
})
export type PostsSectionSchema = Schema.TypeOf<typeof PostsSectionSchema>
