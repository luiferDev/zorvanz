import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        console.error(error)

        return (
            <div className="flex flex-col items-center w-full relative top-80">
                <h1 className="lg:text-7xl pb-4">
                    <Link to="/">Oops!</Link>
                </h1>
                <p className="text-2xl">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-2xl text-red-400">
                    <i>{error.statusText || error.data?.message}</i>
                </p>
            </div>
        )
    } else {
        console.error('An unknown error occurred')

        return (
            <div className="flex flex-col items-center w-full relative top-80">
                <h1 className="lg:text-7xl pb-4">Oops!</h1>
                <p className="text-2xl">
                    Sorry, an unexpected error has occurred.
                </p>
            </div>
        )
    }
}
