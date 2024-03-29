import {createCloudBackend} from '@alinea/cloud'
import {MediaSchema} from '@alinea/dashboard/schema/MediaSchema'
import {IcRoundInsertDriveFile} from '@alinea/ui/icons/IcRoundInsertDriveFile'
import {IcRoundPermMedia} from '@alinea/ui/icons/IcRoundPermMedia'
import alinea, {BrowserPreview} from 'alinea'
import {SectionsSchema} from './src/sections/Sections.schema'

export const config = alinea.createConfig({
	workspaces: {
		main: alinea.workspace('Example', {
			source: './content',
			mediaDir: './public',
			schema: alinea.schema({
				...MediaSchema,
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
			},
			preview({previewToken}) {
				const base =
					location.host === 'localhost:4500' ? 'http://localhost:3000' : ''
				return <BrowserPreview url={`${base}/api/preview?${previewToken}`} />
			}
		})
	},
	backend: createCloudBackend() as any,
	dashboard: {
		dashboardUrl: '/admin.html',
		handlerUrl: '/api/cms',
		staticFile: './public/admin.html'
	}
})
