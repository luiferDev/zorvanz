

export default function Footer() {
    return (
        <footer className="flex justify-between bg-[#701c1c68] p-12 text-base lg:flex-row lg:justify-center py-20 px-32 lg:text-xl">
            <section>
                <img
                    className="w-full h-auto lg:w-64 mr-48 mb-4"
                    src="/Zorvanz.png"
                    alt="zorvanz logo"
                />
                <div>
                    <p>
                        <strong>Dirección: </strong>cll 100
                    </p>
                    <p>
                        <strong>Contacto: </strong>+573186922713
                    </p>
                    <strong>Siguenos:</strong>
                </div>
                <div>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
            </section>
            <section className="lg:flex lg:flex-row lg:justify-between">
                <div className="mb-4 flex flex-col lg:mr-16">
                    <div className="mb-4 flex flex-col">
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                    </div>
                </div>
                <div className="mb-4 flex flex-col">
                    <div className="mb-4 flex flex-col">
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                        <a className="mb-2.5 text-black" href="#">
                            Lorem, ipsum dolor.
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}