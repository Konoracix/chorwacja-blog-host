import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Trogir</div>
			<div className={styles.blogPost}>
			Zobaczyliśmy  piękne miasto o nazwie Trogir. Jest to miasto które powstało w 3 wieku przed nasza erą. Zwiedziliśmy rynek w Trogirze, pogoda była idealna do robienia zdjęć i zwiedzania.
</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="trogir/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				{/* <BlogImage src="trogir/1.jpg"></BlogImage> */}
				<BlogImage src="trogir/2.jpg"></BlogImage>
				<BlogImage src="trogir/4.jpg"></BlogImage>
				<BlogImage src="trogir/3.jpg"></BlogImage>
			</div>

		</>
}

