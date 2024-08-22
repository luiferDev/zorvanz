import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import './styles/styles.css'

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        console.error(error);

        return (
            <div id="error-page">
                <h1><Link to="/">Oops!</Link></h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.data?.message}</i>
                </p>        
            </div>
        );
    } else {
        console.error("An unknown error occurred");

        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        );
    }
}
