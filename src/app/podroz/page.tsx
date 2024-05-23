import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Podróż</div>
			<div className={styles.blogPost}>
			Mimo że Kraków jest jednym z najpiękniejszych miast w Polsce, czasami człowiek potrzebuje trochę słońca i egzotyki. Dlatego w drodze do słonecznej Granady musieliśmy przelecieć z Krakowa do Malagi, dwóch uroczych miast w południowej Hiszpanii. 
			Wylot z Krakowa do Malagi był o poranku, co dało nam możliwość cieszenia się widokiem pięknych gór i wybrzeża podczas lotu. Po kilku godzinach dotarliśmy na miejsce i od razu poczułam się jak wakacyjnie. Słoneczna pogoda, plaże, tapas i flamenco - to wszystko sprawiło, że Malaga okazała się idealnym miejscem na relaks i odpoczynek. 
			Sewilla to miasto pełne historii i kultury, wąskie uliczki, pałace, ogrody i katedry. Zwiedzanie Alcazar, Plaza de Espana było niezapomnianym doświadczeniem, które na zawsze pozostanie w mojej pamięci. 
			Po miesiącu spędzonym w Granadzie przyszedł czas na powrót do Krakowa z Sewilli. Ostatecznie opuszczając ten uroczy kawałek Hiszpanii, zabrałam ze sobą mnóstwo pięknych wspomnień i chęć powrotu w to magiczne miejsce. 
			Podsumowując, wyjazd z Krakowa do Malagi i wylot z Sewilii do Krakowa to był dla mnie niezapomniany i pełen wrażeń przystanek na mapie podróży. Teraz czuję się odprężony, zrelaksowany i pełny pozytywnej energii. I choć Polska zawsze będzie moim domem, to czasami warto wyjść poza granice i odkryć coś nowego. 

			</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="podroz/3.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				
				<BlogImage src="podroz/7.jpg"></BlogImage>
				<BlogImage src="podroz/10.jpg"></BlogImage>
				<BlogImage src="podroz/11.jpg"></BlogImage>
				<BlogImage src="podroz/12.jpg"></BlogImage>
				<BlogImage src="podroz/13.jpg"></BlogImage>
				<BlogImage src="podroz/2.jpg"></BlogImage>
				<BlogImage src="podroz/16.jpg"></BlogImage>
				<BlogImage src="podroz/17.jpg"></BlogImage>
				<BlogImage src="podroz/18.jpg"></BlogImage>
				<BlogImage src="podroz/19.jpg"></BlogImage>
				<BlogImage src="podroz/20.jpg"></BlogImage>
				<BlogImage src="podroz/1.jpg"></BlogImage>
				<BlogImage src="podroz/4.jpg"></BlogImage>
				<BlogImage src="podroz/5.jpg"></BlogImage>
				<BlogImage src="podroz/6.jpg"></BlogImage>
				<BlogImage src="podroz/14.jpg"></BlogImage>
			</div>

		</>
}

