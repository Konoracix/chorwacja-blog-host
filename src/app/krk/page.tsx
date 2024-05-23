import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function loscahorros() {
		return <>

			
			<div className={styles.mainPageTitle}>Narodowy Park Krk</div>
			<div className={styles.blogPost}>Zobaczyliśmy jeden z Narodowych parków Chorwacji Park Krka. Po drodzę zahaczyliśmy o Šibenik, który jest pięknym miastem pod kątem zwiedzania. Już w samym parku widzieliśmy niezliczoną ilość wodospadów, z których słynie Narodowy Park Krka. Pogoda była idealna do robienia zdjęć.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="krk/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				{/* <BlogImage src="krk/1.jpg"></BlogImage> */}
				<BlogImage src="krk/2.jpg"></BlogImage>
				<BlogImage src="krk/3.jpg"></BlogImage>
			</div>

		</>
}

