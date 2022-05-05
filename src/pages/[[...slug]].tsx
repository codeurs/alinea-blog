import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {Sections} from '../sections/Sections'
import {sectionsQuery} from '../sections/Sections.query'
import {pages, Pages} from '../server/pages'
import {Page} from '../server/schema'

const AlineaPageView: NextPage<{page: PageData}> = ({page}) => {
	return (
		<div>
			<Sections sections={page.sections} />
		</div>
	)
}

export default AlineaPageView

async function pageQuery(pages: Pages, page: Page) {
	return {
		...page,
		sections: await sectionsQuery(pages, page.sections)
	}
}

export type PageData = Awaited<ReturnType<typeof pageQuery>>

export const getStaticPaths: GetStaticPaths = async () => {
	const urls = await pages
		.findMany((page) => page.type.isIn(['Page']))
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
	const slug = '/' + (context.params?.slug || []).join('/')
	const page = await pages
		.findFirst((page) => page.url.is(slug))
		.whereType(Page)

	if (!page) return {notFound: true}
	const pageData = await pageQuery(pages, page)

	return {props: {page: pageData}}
}
