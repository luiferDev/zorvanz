import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-[70vh] gap-12 m-8">
            <header className="w-full te gap-4 xt-center">
                <h2 className="text-5xl">Entérate de nuestra experiencia</h2>
            </header>
            <p className="text-xl w-[30ch] text-center lg:w-[50ch]">Descubre el aroma que te define. Explora nuestra colección o personaliza tu fragancia hoy mismo. ¡Observa todo lo que ofrece Zorvanz!</p>
            <Link className='flex items-center text-center justify-center font-ageo text-base rounded-3xl w-32 h-9 border-none bg-zorvanz-red text-zorvanz-beige lg:w-64 lg:h-16 lg:text-2xl' to="/product-catalog">
                Productos
            </Link>
        </section>
    )
}
