import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	throw new Error('Failed api nextjs api request')
}
