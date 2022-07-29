import Image from 'next/image'
import {ImageBlockSchema} from './ImageBlock.schema'

export const ImageBlock: React.FC<ImageBlockSchema> = ({image}) => {
	if (!image) return null

	const {src, width, height} = image

	return (
		<div className="my-4">
			<Image
				src={src}
				width={width}
				height={height}
				sizes="(max-width: 500px) 100vw, 768px"
			/>
		</div>
	)
}
