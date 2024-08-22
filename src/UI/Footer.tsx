import zorvanzLogo from '/ZorvanzZorvanz.svg'
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <section className='footer__logo'>
                <img src={zorvanzLogo} alt="zorvanz logo" />
                <div>
                    <p><strong>Dirección: </strong>cll 100</p>
                    <p><strong>Contacto: </strong>+573186922713</p>
                    <strong>Siguenos:</strong>
                </div>
                <div>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </div>
            </section>
            <section className='footer__info'>
                <div>
                    <div>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                        <a href="#">Lorem, ipsum dolor.</a>
                    </div>
                </div>

            </section>
        </footer>
    )
}