import { JSX } from 'react'

interface TitleI {
    styles?: string
    titleStyles?: string
    bodyStyles?: string
    subtitle: string
    body: string
}

export function Texts({
    styles = '',
    titleStyles = '',
    bodyStyles = '',
    subtitle,
    body,
}: TitleI): JSX.Element {
    return (
        <main className={styles}>
            <h2 className={titleStyles}>{subtitle}</h2>
            <p className={bodyStyles}>{body}</p>
        </main>
    )
}
