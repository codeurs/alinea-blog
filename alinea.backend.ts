import {PasswordLessAuth} from '@alinea/auth.passwordless/PasswordLessAuth'
import {JsonLoader, Server} from '@alinea/backend'
import {GithubData} from '@alinea/backend/data/GithubData'
import {RedisDrafts} from '@alinea/backend/drafts/RedisDrafts'
import {JWTPreviews} from '@alinea/backend/util/JWTPreviews'
import Redis from 'ioredis'
import {createTransport} from 'nodemailer'
import {createStore} from './.alinea'
import {config} from './.alinea/config'

function createServer() {
	const drafts = new RedisDrafts({
		client: new Redis(process.env.REDIS_DSN as string)
	})
	const dashboardUrl = process.env.APP_URL + '/admin'

	const data = new GithubData({
		config,
		loader: JsonLoader,
		rootDir: 'apps/web',
		githubAuthToken: process.env.GITHUB_TOKEN!,
		owner: 'codeurs',
		repo: 'alinea-blog',
		branch: 'master',
		author: {
			name: 'Ben',
			email: 'ben@codeurs.be'
		}
	})
	const auth = new PasswordLessAuth({
		dashboardUrl,
		subject: 'Login to alinea blog',
		from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
		transporter: createTransport({
			host: process.env.MAIL_HOST,
			port: Number(process.env.MAIL_PORT),
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD
			}
		}),
		jwtSecret: process.env.JWT_SECRET!,
		async isUser(email: string) {
			console.log(email)
			return email.endsWith('@codeurs.be')
		}
	})
	return new Server({
		dashboardUrl,
		auth,
		config,
		createStore,
		drafts: drafts,
		target: data,
		media: data,
		previews: new JWTPreviews(process.env.JWT_SECRET!)
	})
}

export const backend = createServer()

/*export const backend =
	process.env.NODE_ENV === 'development'
		? new DevServer({
				config,
				createStore
		  })
		: createServer()*/
