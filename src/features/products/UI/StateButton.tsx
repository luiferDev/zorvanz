import React from 'react'

interface Props {
	text: string,
	isPending?: boolean,
	loadingText?: string,
	style: string
}

export default function StateButton({ text, isPending, loadingText }: Props):React.ReactElement {
    return (
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-[12px]"
        >
            {isPending ? loadingText : text}
        </button>
    )
}
