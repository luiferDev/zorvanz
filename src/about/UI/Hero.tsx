
export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center lg:flex-row lg:h-screen">
            <header className="w-full pt-20 px-8 flex flex-col justify-center items-center m-8 gap-4 lg:w-1/2 lg:p-32">
                <h1 className="pb-4 text-6xl lg:ml-[-3rem]">Nuestra Historia</h1>
                <p className="text-xl">
                    Zorvanz es más que una marca de fragancias; es una invitación a descubrir tu esencia única. Desde nuestros inicios, nos hemos dedicado a crear experiencias olfativas personalizadas que reflejan la individualidad de cada persona.
                </p>
            </header>
            <img className="aspect-video w-full h-3/5 p-8 lg:w-1/2" src="/zorvanzAbout.jpg" alt="imagen de una mujer con unos perfumes" />
        </section>
    )
}
