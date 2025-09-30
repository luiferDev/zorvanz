import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { Toaster } from 'sonner'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" type="image/svg+xml" href="/Zorvanz_1.svg" />
                <title>Zorvanz | Fragancias, Escencias y más</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
				<ScrollRestoration />
				<Toaster />
                <Scripts />
            </body>
        </html>
    )
}

export default function Root() {
    return <Outlet />
}
