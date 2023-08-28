import Image from 'next/image'
import styles from './index.module.css'
import Logo from '../../media/logo/logo.svg'


export default function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.divLogo}>
        <Image
            src={Logo}
            alt='Logo'
            fill
            sizes='(max-width: 66px) 100vw, 60px'
            priority
        />
        </div>
        <div>
        <nav><a href="#">Inicio</a></nav>
        </div>
        </header>
    )
}