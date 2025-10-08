import { values } from '../../hooks/constants'

export default function Values() {
    return (
        <section className='h-[1380px] lg:h-screen flex flex-col justify-center items-center gap-12 bg-zorvanz-blue'>
            <header>
                <h2 className='text-5xl pl-4 pb-4 text-zorvanz-beige'>Nuestros Valores</h2>
            </header>
            <article className='flex flex-col gap-3 lg:justify-center lg:items-center lg:w-full lg:flex-row'>
                {values.map((value) => (
					<div className='w-[35ch] text-zorvanz-beige p-4 rounded-3xl lg:h-80
					border-[1px] border-solid border-bl-[rgba(255_255_255_0.1)] bg-gradient-to-b from-[#fff2] to-transparent shadow-xl shadow-black backdrop-blur-md' key={value.id}>
                        <img className='w-6 h-6 lg:w-12 lg:h-12' src={value.icon} alt={value.alt} />
                        <h2 className='text-2xl pb-4'>{value.title}</h2>
                        <p className='text-base'>{value.description}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}
