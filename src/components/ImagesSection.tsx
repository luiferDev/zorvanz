import fragrance1 from '/contact_fragrance1.svg'
import fragrance2 from '/fragrance-blue.svg'
import fragrance3 from '/fragrance-red.svg'

export default function ImagesSection() {
    return (
        <>
            <section className='flex flex-col justify-center items-center mt-12 mb-12 w-full lg:pt-16 lg:pr-40'>
                <img className='w-96 h-auto aspect-video rounded-bl-3xl' src={fragrance2} alt="fragrance blue" />
                <div className='pt-2.5'>
                    <img className='w-36 h-auto aspect-square pr-3' src={fragrance1} alt="fragrance red" />
                    <img className='w-36 h-auto aspect-square' src={fragrance3} alt="fragrance red with flowers" />
                </div>
            </section>
        </>
    )
}