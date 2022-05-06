import Link from 'next/link'
import {RichText} from '../../ui/RichText'
import {PostsSectionData} from './PostsSection.query'

export const PostsSection: React.FC<PostsSectionData> = ({title, posts}) => {
	return (
		<section className="overflow-hidden text-gray-600 body-font">
			<div className="container px-5 mx-auto my-24">
				<div className="-my-8 divide-y-2 divide-gray-100">
					{posts.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</div>
			</div>
		</section>
	)
}

const Post: React.FC<PostsSectionData['posts'][number]> = ({
	url,
	title,
	description,
	tag,
	date
}) => {
	return (
		<div className="flex flex-wrap py-8 md:flex-nowrap">
			<div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
				<span className="font-semibold text-gray-700 title-font">{tag}</span>
				<span className="text-sm text-gray-500">{date}</span>
			</div>
			<div className="md:flex-grow">
				<h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
					{title}
				</h2>
				<div className="leading-relaxed">
					<RichText doc={description as any} />
				</div>
				<Link href={url}>
					<a className="inline-flex items-center mt-4 text-indigo-500">
						Learn More
						<svg
							className="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14"></path>
							<path d="M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</Link>
			</div>
		</div>
	)
}
