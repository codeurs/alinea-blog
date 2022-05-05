import '@alinea/css'
import type {AppProps} from 'next/app'
import '../global.css'
import {Layout} from '../layout/Layout'

function MyApp({Component, pageProps}: AppProps) {
	if ('NO_LAYOUT' in Component && (Component as any).NO_LAYOUT) {
		const NoLayoutComponent = Component as any
		return <NoLayoutComponent {...pageProps} />
	}

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
