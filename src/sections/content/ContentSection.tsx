import {RichText} from '../../ui/RichText'
import * as Blocks from './blocks'
import {ContentData} from './ContentSection.query'

export const ContentSection: React.FC<ContentData> = (props) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container flex flex-wrap items-center px-5 mx-auto my-24">
				<div className="max-w-screen-md">
					<RichText doc={props.text as any} view={Blocks as any} />
				</div>
			</div>
		</section>
	)
}
