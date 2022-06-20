import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import styles from './notFound.module.scss'

export default function NotFound() {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.backToIndex}>
                    <h3 className={styles.text}>Desculpe-nos!</h3>
                    <p className={styles.text}>Esta página não existe mais</p>
                    <Link to='/'><button className={styles.payment__button}>VOLTAR PARA A PÁGINA INICIAL </button></Link>
                </div>
                <img className={styles.text} src='https://midia.fotos-riachuelo.com.br/spa-storefront/public/error_image.svg' alt='page not found' />
            </div>
        </>
    )
}


