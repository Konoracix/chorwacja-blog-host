import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
	return	<div className={styles.container}>
				<Link style={{ textDecoration: 'none', color: 'black' }} href={"/"}>
					<div className={styles.mainPage}>Strona główna</div> 
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black' }} href={"/gallery"}> 
					<div className={styles.gallery}>Galeria</div>
				</Link>

				{/* <Link href={"https://zsl.gliwice.pl/"}> */}
				<div className={styles.logoWrapper}>
				<a href="https://zsl.gliwice.pl/">
					<img className={styles.logo} src="logo-zsl.png"></img>
				</a>
				</div>
				{/* </Link> */}
				</div>
}
