import {Article, Blog, Page, Pages} from '@alinea/content/main'
import {initPages} from '@alinea/content/main/pages'
import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {Sections} from '../sections/Sections'
import {sectionsQuery} from '../sections/Sections.query'

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

export const getStaticPaths: GetStaticPaths = async (context) => {
	const pages = initPages()
	const urls = await pages
		.where((page) => page.type.isIn(allowedTypes))
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
	const pages = initPages(context.previewData as string)
	const slug = '/' + (context.params?.slug || []).join('/')
	const page = await pages.first((page) => page.url.is(slug))

	if (!page || !allowedTypes.includes(page.type)) return {notFound: true}
	const pageData = await pageQuery(pages, page as Page | Blog | Article)

	return {props: {page: pageData}}
}
