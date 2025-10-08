export default function Vision() {
    return (
        <section className="flex flex-col justify-center my-12 items-center lg:flex-row">
            <header className="lg:w-1/2 lg:p-8 flex flex-col lg:ml-12 text-start gap-4 lg:m-4">
                <h2 className="text-5xl text-start!">Visión</h2>
                <p className="text-xl w-[25ch] lg:w-[50ch]">
Consolidar a Zorvanz como una empresa nacional para 2030, reconocida por su liderazgo en la industria nacional de fragancias. Seremos una empresa sólida y en constante crecimiento, que no solo ofrece velas y ambientadores personalizados, sino que en el futuro expande su portafolio hacia nuevos productos.
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
