import {LinkData} from '@alinea/input.link'
import Link from 'next/link'
import {PropsWithChildren} from 'react'

export const Button: React.FC<
	PropsWithChildren<LinkData & {mode?: 'primary' | 'secondary'}>
> = ({mode = 'primary', url, children}) => {
	const className = [
		' px-6 py-2 rounded text-lg inline-flex',
		{
			primary:
				'text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600',
			secondary:
				'text-gray-700 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200'
		}[mode]
	].join(' ')

	if (!url.startsWith('http')) {
		return (
			<Link href={url}>
				<a className={className}>{children}</a>
			</Link>
		)
	}

	return (
		<a href={url} target="_blank" className={className} rel="noreferrer">
			{children}
		</a>
	)
}
