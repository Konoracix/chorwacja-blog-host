import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function loscahorros() {
		return <>

			
			<div className={styles.mainPageTitle}>Hunting game</div>
			<div className={styles.blogPost}>Piątkowy wieczór spędzaliśmy na poszukiwaniu różnych budowli, pomników ale nawet psów, z którymi musieliśmy zrobić zdjęcia. Emocje podczas tej zabawy sięgały zenitu gdyż zostaliśmy podzieleni na grupy 5-cio osobowe i całą grę wygrywały osoby, które jako pierwsze wykonały 12 zdjęć i przesłały je organizatorowi. Ostatecznie grę udało wygrać się 5-cio osobowej grupie z naszej szkoły.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="hunting/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				{/* <BlogImage src="hunting/1.jpg"></BlogImage> */}
				<BlogImage src="hunting/2.jpg"></BlogImage>
				<BlogImage src="hunting/3.jpg"></BlogImage>
				<BlogImage src="hunting/4.jpg"></BlogImage>
				<BlogImage src="hunting/5.jpg"></BlogImage>
				<BlogImage src="hunting/6.jpg"></BlogImage>
				<BlogImage src="hunting/7.jpg"></BlogImage>
				<BlogImage src="hunting/8.jpg"></BlogImage>
			</div>

		</>
}

