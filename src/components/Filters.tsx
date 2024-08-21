import { useId, useState } from "react"

export default function Filters() {

    const [minPrice, SetMinPrice] = useState('0')
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetMinPrice(event.target.value)
    }

    const handleChanceCategory = () => {

    }

    return (
        <section>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range" id={minPriceFilterId}
                    min='0' max='100000' onChange={handleMinPrice} />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}
                    onChange={handleChanceCategory}>Categoría</label>
                <select id={categoryFilterId}>
                    <option value="all">Todos</option>
                    <option value="VELAS_AROMATICAS">Velas Arómaticas</option>
                    <option value="FRAGANCIAS_CORPORALES">Fragancias Corporales</option>
                    <option value="FRAGANCIAS_AMBIENTALES">Fragancias Ambientales</option>
                </select>
            </div>
        </section>
    )
}
