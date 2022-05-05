import {Button} from '../../../../ui/Button'
import {ButtonBlockData} from './ButtonBlock.query'

export const ButtonBlock: React.FC<ButtonBlockData> = ({label, link}) => {
	if (!link?.href) return null

	return (
		<div className="mt-4 cursor-pointer">
			<Button {...link}>{label}</Button>
		</div>
	)
}
