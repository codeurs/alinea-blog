import {IcRoundInsertDriveFile} from '@alinea/ui/icons/IcRoundInsertDriveFile'
import {IcRoundPermMedia} from '@alinea/ui/icons/IcRoundPermMedia'
import {
	BrowserPreview,
	createConfig,
	MediaSchema,
	path,
	root,
	schema,
	select,
	text,
	type,
	workspace
} from 'alinea'
import {SectionsSchema} from './src/sections/Sections.schema'

export const config = createConfig({
	workspaces: {
		main: workspace('Alinea blog', {
			source: './content',
			mediaDir: './public',
			schema: schema({
				...MediaSchema,
				Page: type('Page', {
					title: text('Title'),
					path: path('Path'),
					sections: SectionsSchema
				}),
				Blog: type('Blog', {
					title: text('Title'),
					path: path('Path'),
					sections: SectionsSchema
				}).configure({isContainer: true, contains: ['Article']}),
				Article: type('Article', {
					title: text('Title'),
					path: path('Path'),
					date: text('Date'),
					tag: select('Tag', {
						World: 'World',
						Analysis: 'Analysis',
						Lifestyle: 'Lifestyle',
						Wedding: 'Wedding'
					}),
					sections: SectionsSchema
				})
			}),
			roots: {
				data: root('Website', {
					icon: IcRoundInsertDriveFile,
					contains: ['Page']
				}),
				media: root('Media', {
					icon: IcRoundPermMedia,
					contains: ['MediaLibrary']
				})
			},
			preview({entry, previewToken}) {
				const noPreviews = new Set(['Docs', 'MediaLibrary'])
				if (noPreviews.has(entry.type)) return null
				const location = process.env.APP_URL
				return (
					<BrowserPreview
						url={`${location}/api/preview?${previewToken}`}
						prettyUrl={entry.url}
					/>
				)
			}
		})
	}
})
