import Image from 'next/image'
import {ImageBlockData} from './ImageBlock.query'

export const ImageBlock: React.FC<ImageBlockData> = ({image}) => {
	if (!image) return null

	return (
		<div className="my-4">
			<Image {...image} sizes="(max-width: 500px) 100vw, 768px" />
		</div>
	)
}
