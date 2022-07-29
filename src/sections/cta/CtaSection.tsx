import {Button} from '../../ui/Button'
import {CtaSectionSchema} from './CtaSection.schema'

export const CtaSection: React.FC<CtaSectionSchema> = ({
	title,
	label,
	link
}) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 mx-auto my-24">
				<div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
					<h2 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16 title-font">
						{title}
					</h2>
					{link && <Button {...link}>{label}</Button>}
				</div>
			</div>
		</section>
	)
}
