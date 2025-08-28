import fragrance1 from '/contact_fragrance1.svg'

export default function ImagesSection() {
    return (
        <>
            <section className="flex flex-col justify-center items-center mt-12 mb-12 w-full lg:pt-16 lg:pr-40">
                <img
                    className="w-96 h-auto aspect-square"
                    src={fragrance1}
                    alt="fragrance red"
                />
            </section>
        </>
    )
}