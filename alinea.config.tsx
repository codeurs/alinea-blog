import {IcRoundInsertDriveFile} from '@alinea/ui/icons/IcRoundInsertDriveFile'
import {IcRoundPermMedia} from '@alinea/ui/icons/IcRoundPermMedia'
import {alinea} from 'alinea'
import {SectionsSchema} from './src/sections/Sections.schema'

export const config = alinea.createConfig({
	workspaces: {
		main: alinea.workspace('Example', {
			source: './content',
			mediaDir: './public',
			schema: alinea.schema({
				...alinea.MediaSchema,
				Page: alinea.type('Page', {
					title: alinea.text('Title'),
					path: alinea.path('Path'),
					sections: SectionsSchema
				}),
				Blog: alinea
					.type('Blog', {
						title: alinea.text('Title'),
						path: alinea.path('Path'),
						sections: SectionsSchema
					})
					.configure({isContainer: true, contains: ['Article']}),
				Article: alinea.type('Article', {
					title: alinea.text('Title'),
					path: alinea.path('Path'),
					date: alinea.text('Date'),
					tag: alinea.select('Tag', {
						World: 'World',
						Analysis: 'Analysis',
						Lifestyle: 'Lifestyle',
						Wedding: 'Wedding'
					}),
					sections: SectionsSchema
				})
			}),
			roots: {
				data: alinea.root('Example project', {
					icon: IcRoundInsertDriveFile,
					contains: ['Page']
				}),
				media: alinea.root('Media', {
					icon: IcRoundPermMedia,
					contains: ['MediaLibrary']
				})
			}
		})
	}
})
