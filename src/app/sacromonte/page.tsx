import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Sacromonte</div>
			<div className={styles.blogPost}>Sacromonte w Grenadzie to miejsce pełne historii i kultury, również jego znane jaskinie, które od wieków stanowią dom dla naszych przodków. Odkrywając codziennie nowe miejsca możemy odczuć magie i tajemnice która otacza te starożytne przestrzenie. Muzeum Domu Jaskiń pokazuje nam starożytne zwyczaje i codzienne życie. To fascynujące doświadczenie, które pozwala lepiej zrozumieć życie ludzi, którzy zamieszkiwali te niezwykłe pomieszczenia. Podczas zwiedzania Sacro Monte i Muzeum Domu Jaskiń można poczuć się jak podróżnik w czasie, poznając historię i kulturę tego ciekawego regionu Hiszpanii. To miejsce, które warto odwiedzić, by doświadczyć autentycznego dziedzictwa Andaluzji.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="sacromonte/2.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				<BlogImage src="sacromonte/1.jpg"></BlogImage>
				<BlogImage src="sacromonte/3.jpg"></BlogImage>
				<BlogImage src="sacromonte/4.jpg"></BlogImage>
				<BlogImage src="sacromonte/5.jpg"></BlogImage>
				<BlogImage src="sacromonte/6.jpg"></BlogImage>
				<BlogImage src="sacromonte/7.jpg"></BlogImage>
				<BlogImage src="sacromonte/8.jpg"></BlogImage>
				<BlogImage src="sacromonte/10.jpg"></BlogImage>
				<BlogImage src="sacromonte/11.jpg"></BlogImage>
				<BlogImage src="sacromonte/12.jpg"></BlogImage>
				<BlogImage src="sacromonte/13.jpg"></BlogImage>
				<BlogImage src="sacromonte/14.jpg"></BlogImage>
				<BlogImage src="sacromonte/15.jpg"></BlogImage>
				<BlogImage src="sacromonte/16.jpg"></BlogImage>
				<BlogImage src="sacromonte/17.jpg"></BlogImage>
				<BlogImage src="sacromonte/2.jpg"></BlogImage>
			</div>

		</>
}

