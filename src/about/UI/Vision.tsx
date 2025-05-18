export default function Vision() {
    return (
        <section className="flex flex-col justify-center my-12 items-center lg:flex-row">
            <header className="lg:w-1/2 lg:p-8 flex flex-col lg:ml-12 text-start gap-4 lg:m-4">
                <h2 className="text-5xl text-start!">Visión</h2>
                <p className="text-xl w-[25ch] lg:w-[50ch]">
                    Queremos ser un líder global en fragancias y perfumes,
                    exportando sus productos al extranjero. A futuro, desea
                    mantenerse fiel a sus valores de innovación, integridad,
                    transparencia, honestidad, enfoque en el cliente y calidad.
                    La visión es ser reconocida internacionalmente por priorizar
                    el bienestar, la seguridad, la comodidad y la satisfacción
                    de sus clientes.
                </p>
            </header>

            <img className="aspect-video w-full p-8 lg:w-1/2"
                src="/mujerEnELCampo.jpg"
                alt="imagen de una mujer en un campo"
            />
        </section>
    )
}
