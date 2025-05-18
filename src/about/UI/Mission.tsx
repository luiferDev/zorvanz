
export default function Mission() {
    return (
        <section className="mt-12 border-[1px] border-solid border-black bg-zorvanz-blue">
            <div className="border-[1px] border-solid border-zorvanz-blue m-8 flex flex-col justify-center items-center bg-white lg:h-[70vh] lg:flex-row">
                <img className="aspect-video w-full p-4 mt-8 lg:w-1/2 lg:mt-0" src="/mission.jpg" alt="imagen de una fragancia" />
                <header className="m-20 flex flex-col justify-center items-center text-start gap-4">
                    <h2 className="pb-4 text-5xl w-full">Misión</h2>
                    <p className="text-xl w-[20ch] lg:w-[40ch]">Queremos ser un líder en la industria de las fragancias, ofreciendo productos naturales y respetuosos con el medio ambiente y la piel. Se enfocan en crear aromas que no solo agraden a los sentidos, sino que también promuevan el bienestar del planeta y de los usuarios, buscando inspirar amor y lealtad en cada experiencia con sus fragancias.</p>
                </header>
            </div>

        </section>
    )
}
