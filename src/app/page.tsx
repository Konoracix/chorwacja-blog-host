import Image from "next/image";
import styles from "./page.module.css";
import { VT323 } from 'next/font/google'
import { Poppins } from "next/font/google";
import Post from '@/components/Post/Post'
import Link from "next/link";

const vt323 = VT323({ subsets: ['latin'], weight: '400' })
// const poppins = Poppins({weight: '400', subsets: ['latin']})

export default function Home() {
  // return <div className={styles.imageContainer} >
		return <>

			{/* <div className={poppins.className}> */}
			<div>
				
				<div className={styles.mainPageTitle}>Zagraniczne praktyki zawodowe w ZSŁ</div>
			</div>
			{/* </div> */}

			<div className={styles.flags}>
				<img className={styles.flag} src="Flag_of_Croatia.svg"></img>
				<img className={styles.unia} src="unia.png"></img>
				{/* <img className={styles.flag} src="logo-zsl.png"></img> */}
				<img className={styles.flag} src="flaga-polska.png"></img>
			</div>

			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} style={{width: "70vw"}} src="czaswolny/3.jpg" alt="asd" />
			</div>
			<h1 style={{padding: "5.3vh 0"}}>Posty</h1>
			<div className={styles.blogContainer}>
				{/* <Post title="Ja po siłowni :)" src="post1.jpeg">Jest pompa!!! 💪💪🏋️‍♂️🏋️‍♂️🏋️‍♂️. Łapa siedzi. MASŁO!!!! 🔥z💃</Post>
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/tytus'}>
					<Post title="Tytus" src="post2.jpg">Jan Rzepicha</Post>
				</Link>
				<Post title="To ja" src="post3.png">Ja przed każdym niemieckim😢😿</Post>
				<Post title="Trzech typów podcast odcinek nr 1.mp4" src="post4.jpg">
					Witajcie misie kolorowe! 🐻 Czas na kolejny odcinek naszego podcastu 3 typów podcast! 🎧 Dziś przygotowaliśmy dla was coś naprawdę ekscytującego! 🌟 Rozmawialiśmy między innymi o jednej takiej co poleciała na e46, o wojnie w Izraelu i o przepisach na gotowane jajka 🥚🍳.
				</Post> */}
				

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/hunting'}>
					<Post title="Hunting game" src="hunting/1.jpg">
					Piątkowy wieczór spędzaliśmy na poszukiwaniu różnych budowli, pomników ale nawet psów, z którymi musieliśmy zrobić zdjęcia. Emocje podczas tej zabawy sięgały zenitu gdyż zostaliśmy podzieleni ...</Post>
				</Link>
				
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/makarska'}>
					<Post title="Makarska" src="makarska/1.jpg">
					Zobaczyliśmy piękne miasto Makarskę. Po drodzę zahaczyliśmy o Omiš który jest pięknym miastem pod kątem zwiedzania. Zwiedzaliśmy rynek w Omiš, płynęliśmy łódką po Rzece. Mieliśmy czas wolny na zwiedzanie ...
					</Post>
				</Link>


				

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/trogir'}>
					<Post title="Trogir" src="trogir/1.jpg">
					Zobaczyliśmy  piękne miasto o nazwie Trogir. Jest to miasto które powstało w 3 wieku przed nasza erą. Zwiedziliśmy rynek w Trogirze, pogoda była idealna do robienia zdjęć ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/czaswolny'}>
					<Post title="Czas wolny" src="czaswolny/1.jpg">
					W Chorwacji czas mija szybko, a po pracy mamy dużo atrakcji takich jak na przykład hunting game, boisko do piłki nożnej i siatkowki, które znajdują się blisko apartamentu. Split i Kaštel Štafilić mają bardzo wiele ciekawych ...
					</Post>
				</Link>
				
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/praca'}>
					<Post title="Praca" src="praca/4.jpeg">
					Informatycy zajmowali się wgrywaniem systemów na laptopy, komputery oraz ich konfiguracją, logistycy zajmowali się rozkładaniem towaru na półki sklepowe, programista zajmował się cyfryzacją faktur ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/krk'}>
					<Post title="Narodowy Park Krk" src="krk/1.jpg">
					Zobaczyliśmy jeden z Narodowych parków Chorwacji Park Krka. Po drodzę zahaczyliśmy o Šibenik, który jest pięknym miastem pod kątem zwiedzania. Już w samym parku widzieliśmy ...
					</Post>
				</Link>
			</div>
		</>
	// </div>
}
