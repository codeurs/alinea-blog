import {IcRoundInsertDriveFile} from '@alinea/ui/icons/IcRoundInsertDriveFile'
import {IcRoundPermMedia} from '@alinea/ui/icons/IcRoundPermMedia'
import {
	createConfig,
	MediaSchema,
	path,
	root,
	schema,
	text,
	type,
	workspace
} from 'alinea'
import {SectionsSchema} from './src/sections/Sections.schema'

export const config = createConfig({
	workspaces: {
		main: workspace('Example', {
			source: './content',
			mediaDir: './public',
			schema: schema({
				...MediaSchema,
				Page: type('Page', {
					title: text('Title'),
					path: path('Path'),
					sections: SectionsSchema
				})
			}),
			roots: {
				data: root('Example project', {
					icon: IcRoundInsertDriveFile,
					contains: ['Page']
				}),
				media: root('Media', {
					icon: IcRoundPermMedia,
					contains: ['MediaLibrary']
				})
			}
		})
	}
})
