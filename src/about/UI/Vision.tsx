export default function Vision() {
    return (
        <section className="flex flex-col justify-center my-12 items-center lg:flex-row">
            <header className="lg:w-1/2 lg:p-8 flex flex-col lg:ml-12 text-start gap-4 lg:m-4">
                <h2 className="text-5xl text-start!">Visión</h2>
                <p className="text-xl w-[25ch] lg:w-[50ch]">
En Zorvanz nos dedicamos a fabricar y comercializar velas y ambientadores personalizados que transforman los espacios en lugares agradables, y que representan la esencia de cada uno de nuestros clientes. Nos esforzamos por crear productos con fragancias únicas, elaborados con ingredientes amigables y respetuosos con quienes los usan.
                </p>
            </header>

            <img
                className="aspect-video w-full p-8 lg:w-1/2"
                src="/mujerEnELCampo.jpg"
                alt="imagen de una mujer en un campo"
            />
        </section>
    )
}
