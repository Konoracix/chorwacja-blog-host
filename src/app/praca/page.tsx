import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Praca</div>
			<div className={styles.blogPost}>Informatycy zajmowali się wgrywaniem systemów na laptopy, komputery oraz ich konfiguracją, logistycy zajmowali się rozkładaniem towaru na półki sklepowe, programista zajmował się cyfryzacją faktur a elektronicy montażem protectorów oraz sterowników LED oraz przygotowywanie kabli do przyszłego montażu lamp.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="praca/3.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				<BlogImage src="praca/1.jpeg"></BlogImage>
				<BlogImage src="praca/2.jpeg"></BlogImage>
				<BlogImage src="praca/4.jpeg"></BlogImage>
				
			</div>

		</>
}

