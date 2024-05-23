import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer () {
	return <>
	{/* <div className={styles.shadow}></div> */}
	{/* <hr className={styles.hr} /> */}
	<div className={styles.shadow}>
		<div className={styles.footer}>

			<div className={styles.column}>
				<div style={{fontWeight: 'bold', fontSize: '1.4rem'}}>Kontakt</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "15px", height: "15px", marginRight: "0.4vw"}}>
				  	<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
					</svg>
					32 231 36 12
					<br />

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "15px", height: "15px", marginRight: "0.4vw"}}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
					</svg>
					sekretariat@zsl.gliwice.pl
					<br />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "15px", height: "15px", marginRight: "0.4vw"}}>
 						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
					</svg>
					<Link style={{ textDecoration: 'none', color: 'black'}} href={"https://www.google.com/maps/place/Warszawska+35,+44-102+Gliwice,+Polska/@50.3082004,18.6753535,17z/data=!3m1!4b1!4m6!3m5!1s0x4711304e89f70749:0xdf93a84553e42b2e!8m2!3d50.3082004!4d18.6779284!16s%2Fg%2F11fpv9r23y?entry=ttu"}>
					Gliwice, ul. Warszawska 35
					</Link>
				</div>
			</div>

			{/* <div className={styles.column}>
				<div style={{fontWeight: 'bold'}}>Mati kuc</div>
				<div>Dupa</div>
			</div> */}

			<div className={styles.column}>
				<div style={{fontWeight: 'bold', fontSize: '1.4rem'}}>Zobacz także</div>
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'https://zsl.gliwice.pl/'}>
					
					<div className={styles.link}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "15px", height: "15px", marginRight: "0.4vw"}}>
  						<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
						</svg>
						Strona Szkoły
					</div>
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'https://www.facebook.com/zespolszkollacznosci'}>
				<div className={styles.link}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "15px", height: "15px", marginRight: "0.4vw"}}>
				  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
				</svg>

						Facebook
						
						</div>
				</Link>
			</div>

		</div>
		</div>
	</>
	
}






