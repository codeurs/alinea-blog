import {nodeHandler} from '@alinea/backend/router/NodeHandler'
import {backend} from '@alinea/content/backend.js'

export default nodeHandler(backend.handle)

export const config = {
	// We disable the body parser that is added by Next.js as it incorrectly
	// parses application/octet-stream as string.

	api: {bodyParser: false}
}
