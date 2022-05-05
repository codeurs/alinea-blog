import { decode } from 'blurhash'
import { useMemo } from 'react'

export function useBlurData(
	blurHash: string,
	width: number = 160,
	height: number = 120,
	punch?: number
) {
	return useMemo(() => {
		if (!process.browser) return undefined
		const pixels = decode(blurHash, width, height, punch)
		const canvas = document.createElement('canvas')
		canvas.width = width
		canvas.height = height
		const ctx = canvas.getContext('2d')!
		const imageData = ctx.createImageData(width, height)
		imageData.data.set(pixels)
		ctx.putImageData(imageData, 0, 0)
		const blurDataUrl = canvas.toDataURL()
		return blurDataUrl
	}, [blurHash, width, height, punch])
}
