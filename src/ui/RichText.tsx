import {TextDoc, TextNode, TypesOf} from '@alinea/core'
import {ComponentType, Fragment} from 'react'

function getTag(type: string, attributes: Record<string, any> | undefined) {
	switch (type) {
		case 'heading':
			return `h${attributes?.level || 1}`
		case 'bold':
			return 'b'
		case 'italic':
			return 'i'
		case 'paragraph':
			return 'p'
		case 'bulletList':
			return 'ul'
		case 'listItem':
			return 'li'
	}
	return Fragment
}

function isCoreTextNode<T>(node: TextNode<T>): node is TextNode.Text {
	return node.type === 'text'
}

function RichTextNodeView<T>(node: TextNode<T>) {
	if (isCoreTextNode(node)) {
		const wrappers = node.marks?.map((mrk) => getTag(mrk.type, mrk.attrs)) || []
		return wrappers.reduce((children, Tag) => {
			return <Tag>{children}</Tag>
		}, <>{node.text}</>)
	}

	const {type, content, ...attrs} = node
	const Tag = getTag(type, attrs) || Fragment
	return (
		<Tag>
			{content?.map((node, i) => <RichTextNodeView key={i} {...node} />) || (
				<br />
			)}
		</Tag>
	)
}

export type RichTextProps<T> = {
	doc: TextDoc<T>
	view?: Partial<{
		[K in TypesOf<T>]: ComponentType<Extract<T, {type: K}>>
	}>
}

export function RichText<T>({doc, view}: RichTextProps<T>) {
	const custom: Record<string, any> = view || {}
	if (!Array.isArray(doc)) return null
	return (
		<>
			{doc.map((node, i) => {
				const Custom = custom[node.type]
				if (Custom) return <Custom key={i} {...node} />
				return <RichTextNodeView key={i} {...node} />
			})}
		</>
	)
}
