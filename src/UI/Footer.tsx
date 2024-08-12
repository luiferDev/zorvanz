import zorvanzLogo from '/ZorvanzZorvanz.svg'
import '../components/styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <section className='footer__logo'>
                <img src={zorvanzLogo} alt="zorvanz logo" />
            </section>
            <section className='footer__info'>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </section>
        </footer>
    )
}