import Link from 'next/link'
import {PropsWithChildren} from 'react'
import {LinkData} from '../server/fetchLinks'

export const Button: React.FC<
	PropsWithChildren<LinkData & {mode?: 'primary' | 'secondary'}>
> = ({mode = 'primary', internal, href, children}) => {
	const className = [
		' px-6 py-2 rounded text-lg inline-flex',
		{
			primary:
				'text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600',
			secondary:
				'text-gray-700 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200'
		}[mode]
	].join(' ')

	if (internal) {
		return (
			<Link href={href}>
				<a className={className}>{children}</a>
			</Link>
		)
	}

	return (
		<a href={href} target="_blank" className={className} rel="noreferrer">
			{children}
		</a>
	)
}
