import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function loscahorros() {
		return <>

			
			<div className={styles.mainPageTitle}>Czas wolny</div>
			<div className={styles.blogPost}>W Chorwacji czas mija szybko, a po pracy mamy dużo atrakcji takich jak na przykład hunting game, boisko do piłki nożnej i siatkowki, które znajdują się blisko apartamentu. Split i Kaštel Štafilić mają bardzo wiele ciekawych miejsc do zwiedzania i odkrywania ich kolejnych zakamarków. Split to po prostu jedno z najpiękniejszych miast wszechczasów!</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="czaswolny/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				{/* <BlogImage src="czaswolny/1.jpg"></BlogImage> */}
				<BlogImage src="czaswolny/2.jpg"></BlogImage>
				<BlogImage src="czaswolny/3.jpg"></BlogImage>
				<BlogImage src="czaswolny/4.jpg"></BlogImage>
			</div>

		</>
}

