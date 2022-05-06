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
	const dashboardUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}/admin`
		: `${process.env.APP_URL || 'http://localhost:3000'}/admin`

	const owner = process.env.GITHUB_OWNER || process.env.VERCEL_GIT_REPO_OWNER!
	const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF!
	const repo = process.env.GITHUB_REPO || process.env.VERCEL_GIT_REPO_SLUG!

	const data = new GithubData({
		config,
		loader: JsonLoader,
		githubAuthToken: process.env.GITHUB_TOKEN!,
		owner,
		repo,
		branch,
		author: {
			name: 'David',
			email: 'david@codeurs.be'
		}
	})
	const auth = new PasswordLessAuth({
		dashboardUrl,
		subject: 'Login to alinea blog',
		from: `"Alinea CMS" <${process.env.MAIL_FROM_ADDRESS}>`,
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
			const allowed = (process.env.ALINEA_USERS || '')?.split(',')
			return allowed.includes(email)
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
