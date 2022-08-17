import {Entry, Schema, type} from '@alinea/core'
import alinea from 'alinea'

export const RelatedSectionSchema = type('Related', {
	title: alinea.text('Title'),
	links: alinea.entry.multiple('Fixed links', {
		max: 2,
		condition: Entry.type.isIn(['Article'])
	})
})
export type RelatedSectionSchema = Schema.TypeOf<typeof RelatedSectionSchema>
