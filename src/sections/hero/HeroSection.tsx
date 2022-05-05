import Image from 'next/image'
import {Button} from '../../ui/Button'
import {RichText} from '../../ui/RichText'
import {HeroSectionData} from './HeroSection.query'

export const HeroSection: React.FC<HeroSectionData> = ({
	title,
	intro,
	image,
	buttons
}) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
				<div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
					<h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
						{title}
					</h1>
					<div className="mb-8">
						<RichText doc={intro as any} />
					</div>
					<div className="flex justify-center">
						{buttons.map((button, i) => {
							if (!button.link) return null
							return (
								<div key={i} className="inline mr-2">
									<Button mode={button.mode as any} {...button.link}>
										{button.label}
									</Button>
								</div>
							)
						})}
					</div>
				</div>
				<div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
					{image && <Image {...image} />}
				</div>
			</div>
		</section>
	)
}
