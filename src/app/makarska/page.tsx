import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Makarska</div>
			<div className={styles.blogPost}>
			Zobaczyliśmy piękne miasto Makarskę. Po drodzę zahaczyliśmy o Omiš który jest pięknym miastem pod kątem zwiedzania. Zwiedzaliśmy rynek w Omiš, płynęliśmy łódką po Rzece. Mieliśmy czas wolny na zwiedzanie jak i na kupno najróżniejszych pamiątek. W Makarsce mieliśmy czas na zwiedzanie ale zarazem też na pływanie. Pogoda była idealna do zwiedzania.
			

			</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="makarska/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				
				{/* <BlogImage src="makarska/1.jpg"></BlogImage> */}
				<BlogImage src="makarska/2.jpg"></BlogImage>
				<BlogImage src="makarska/3.jpg"></BlogImage>
				<BlogImage src="makarska/4.jpg"></BlogImage>
				<BlogImage src="makarska/5.jpg"></BlogImage>
				<BlogImage src="makarska/6.jpg"></BlogImage>
			</div>

		</>
}

