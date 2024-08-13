import { Link } from 'react-router-dom'
import zorvanz from '/Zorvanz_1.svg'

export function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/">
                        <img className='logo' src={zorvanz} alt="zorvanz logo" />
                    </Link>
                </div>
                <div className='navbar__btns'>
                    <Link to='/login'>Entrar</Link>
                    <Link to='/comprar'>Comprar</Link>
                </div>
            </div>
        </>
    )
}