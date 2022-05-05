import {PasswordLessLogin} from '@alinea/auth.passwordless/PasswordLessLogin'
import {Client} from '@alinea/client'
import dynamic from 'next/dynamic'
import {config} from '../../.alinea'

const client = new Client(config, '/api/cms')

const dashboard = () =>
	import('@alinea/dashboard').then(({Dashboard}) => Dashboard)
const Dashboard = dynamic(dashboard, {ssr: false})

const Admin = () => {
	return <Dashboard config={config} client={client} auth={PasswordLessLogin} />
}
;(Admin as any).NO_LAYOUT = true

export default Admin
