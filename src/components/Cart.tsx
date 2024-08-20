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
                                    Cantidad: 1
                                </small>
                                <button>+</button>
                            </footer>
                    </li>
                </ul>
                <button>
                    <img src="/removeCart.webp" alt="" />
                </button>
            </aside>
        </>
    )
}
