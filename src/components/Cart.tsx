import { useId } from "react"
import '../components/styles/cart.css'

export default function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className="card__button" htmlFor={cartCheckboxId}>
                <img src="/cart.webp" alt="" />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.postimg.cc/fL1YMvRz/th-12.webp"
                            alt="fragrance" />
                            <div>
                                <strong>fragrance</strong> - $500
                            </div>
                            <footer>
                                <small>
                                    Qty: 1
                                </small>
                                <button>+</button>
                            </footer>
                    </li>
                </ul>
                <button className="btn__img">
                    <img src="/removeCart.webp" alt="imagen de remover del carrito" />
                </button>
            </aside>
        </>
    )
}
