import {Button} from '../../../../ui/Button'
import {ButtonBlockSchema} from './ButtonBlock.schema'

export const ButtonBlock: React.FC<ButtonBlockSchema> = ({label, link}) => {
	if (!link?.url) return null

	return (
		<div className="mt-4 cursor-pointer">
			<Button {...link}>{label}</Button>
		</div>
	)
}
