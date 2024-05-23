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
				<img className={styles.flag} src="flaga-hiszpania.png"></img>
				<img className={styles.unia} src="unia.png"></img>
				{/* <img className={styles.flag} src="logo-zsl.png"></img> */}
				<img className={styles.flag} src="flaga-polska.png"></img>
			</div>

			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} style={{width: "70vw"}} src="zdjecieGlowne.jpg" alt="asd" />
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
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/yoga'}>
					<Post title="Yoga" src="yoga/2.jpg">
					Niedawno miełam okazję wziąć udział w zajęciach z Bollywood Yogi i było to niezwykłe doświadczenie, które połączyło energetyczne tańce Bollywood z relaksującymi technikami jogi. Zajęcia odbywały się w lokalnym parku, gdzie ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/podroz'}>
					<Post title="Podróż" src="podroz/3.jpg">
					Mimo że Kraków jest jednym z najpiękniejszych miast w Polsce, czasami człowiek potrzebuje trochę słońca i egzotyki. Dlatego w drodze do słonecznej Granady musieliśmy przelecieć z Krakowa do Malagi, dwóch uroczych miast ...</Post>
				</Link>
				
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/sacromonte'}>
					<Post title="Sacromonte" src="sacromonte/2.jpg">
						Sacromonte w Grenadzie to miejsce pełne historii i kultury, również jego znane jaskinie, które ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/loscahorros'}>
					<Post title="Los Cahorros" src="losCahorros/14.jpg">
						Wycieczka w góry szlakiem Los Cahorros to niezapomniane doświadczenie dla miłośników przyrody i aktywnego wypoczynku. Szlak ten ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/nerja'}>
					<Post title="Nerja" src="nerja/1.jpg">
					Wspaniale spędziliśmy dzień podczas wizyty w jaskiniach Nerja w Hiszpanii. Podziwialiśmy niezwykłe formacje skalne ...
					</Post>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/ninodelaspinturas'}>
					<Post title="Niño de las Pinturas" src="graficiarz/21.jpg">
					Dzisiaj mieliśmy przyjemność odkryć magiczny świat street artu w Hiszpanii, podążając śladami lokalnego geniusza graffiti - Niño de las Pinturas&apos;a. Ta barwna wycieczka ...
					</Post>
				</Link>

			</div>
		</>
	// </div>
}
