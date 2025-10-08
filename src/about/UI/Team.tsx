import Slider from 'react-slick'
import { teamSettings } from '../../components/settings/sliderSettings'
import { owners } from '../../hooks/constants'

export default function Team() {
    return (
        <>
            <h2 className="text-4xl text-center px-14 lg:px-0 lg:text-6xl lg:my-20">
                Nuestro Equipo
            </h2>
            <Slider {...teamSettings}>
                {owners.map((owner) => (
                    <div key={owner.id} className="flex justify-center mb-14">
                        <div className="flex flex-col justify-center text-center items-center">
                            <div
                                className="h-full w-[25ch] flex flex-col items-center rounded-xl
                                border shadow-2xl shadow-[rgba(0,0,0,0.25)] backdrop-blur-[10px] p-4 border-solid border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-white to-transparent"
                            >
                                <img
                                    className="w-3/4 aspect-square rounded-full"
                                    src={owner.src}
                                    alt={owner.alt}
                                />
                                <h2 className="text-xl mt-4 font-bold">
                                    {owner.nombre}
                                </h2>
                                <h3 className="text-base m-4">{owner.cargo}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
