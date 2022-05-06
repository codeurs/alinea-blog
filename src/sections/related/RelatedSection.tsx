import Link from 'next/link'
import {RelatedSectionData} from './RelatedSection.query'

export const RelatedSection: React.FC<RelatedSectionData> = ({posts}) => {
	return (
		<section className="overflow-hidden text-gray-600 body-font">
			<div className="container px-5 mx-auto mb-24">
				<div className="flex flex-wrap">
					{posts.map((post) => (
						<Related key={post.id} {...post} />
					))}
				</div>
			</div>
		</section>
	)
}

const Related: React.FC<RelatedSectionData['posts'][number]> = ({
	url,
	title,
	tag,
	date
}) => {
	return (
		<div className="flex flex-col items-start p-12 md:w-1/2">
			<span className="inline-block px-2 py-1 text-xs font-medium tracking-widest text-indigo-500 rounded bg-indigo-50">
				{tag}
			</span>
			<h2 className="mt-4 mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
				{title}
			</h2>
			<p className="mb-8 leading-relaxed">{date}</p>
			<div className="flex flex-wrap items-center w-full mt-auto">
				<Link href={url}>
					<a className="inline-flex items-center text-indigo-500">
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
				<span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200">
					<svg
						className="w-4 h-4 mr-1"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						viewBox="0 0 24 24"
					>
						<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
						<circle cx="12" cy="12" r="3"></circle>
					</svg>
					1.2K
				</span>
				<span className="inline-flex items-center text-sm leading-none text-gray-400">
					<svg
						className="w-4 h-4 mr-1"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						viewBox="0 0 24 24"
					>
						<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
					</svg>
					6
				</span>
			</div>
		</div>
	)
}
