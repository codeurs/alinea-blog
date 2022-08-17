import {Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const PostsSectionSchema = type('Posts', {
	title: alinea.text('Title')
})
export type PostsSectionSchema = Schema.TypeOf<typeof PostsSectionSchema>
