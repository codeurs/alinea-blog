import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {backend} from '../../alinea.backend'
import {Sections} from '../sections/Sections'
import {sectionsQuery} from '../sections/Sections.query'
import {pages, Pages} from '../server/pages'
import {Article, Blog, Page} from '../server/schema'

const allowedTypes = ['Page', 'Blog', 'Article']

const AlineaPageView: NextPage<{page: PageData}> = ({page}) => {
	return (
		<div>
			<Sections sections={page.sections} />
		</div>
	)
}

export default AlineaPageView

async function pageQuery(pages: Pages, page: Page | Blog | Article) {
	return {
		...page,
		sections: await sectionsQuery(pages, page.sections)
	}
}

export type PageData = Awaited<ReturnType<typeof pageQuery>>

export const getStaticPaths: GetStaticPaths = async () => {
	const urls = await pages
		.findMany((page) => page.type.isIn(allowedTypes))
		.select((page) => page.url)

	return {
		fallback: false,
		paths: urls.map((url) => ({params: {slug: url.split('/').slice(1)}}))
	}
}
export const getStaticProps: GetStaticProps<
	React.ComponentProps<typeof AlineaPageView>,
	{slug: Array<string>}
> = async (context) => {
	const pages = backend.loadPages('main', context.previewData as string)
	const slug = '/' + (context.params?.slug || []).join('/')
	const page = await pages.findFirst((page) => page.url.is(slug))

	if (!page || !allowedTypes.includes(page.type)) return {notFound: true}
	const pageData = await pageQuery(pages, page as Page | Blog | Article)

	return {props: {page: pageData}}
}
