import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function loscahorros() {
		return <>

			
			<div className={styles.mainPageTitle}>Nerja</div>
			<div className={styles.blogPost}>Wspaniale spędziliśmy dzień podczas wizyty w jaskiniach Nerja w Hiszpanii. Podziwialiśmy niezwykłe formacje skalne, kryształowe stalaktyty i stalagmity, które tworzyły magiczną atmosferę. Najbardziej zapadł nam w pamięć gigantyczny stalagmit o imieniu &quot;Sala de la Catacumba&quot;, który robił ogromne wrażenie. Po zwiedzeniu jaskiń relaksowaliśmy się na pobliskiej plaży, delektując się pięknym widokiem Morza Śródziemnego. To był naprawdę niezapomniany dzień pełen przygód i fascynujących odkryć!</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="nerja/1.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				<BlogImage src="nerja/2.jpg"></BlogImage>
				<BlogImage src="nerja/3.jpg"></BlogImage>
				<BlogImage src="nerja/4.jpg"></BlogImage>
				<BlogImage src="nerja/5.jpg"></BlogImage>
				<BlogImage src="nerja/6.jpg"></BlogImage>
				<BlogImage src="nerja/7.jpg"></BlogImage>
				<BlogImage src="nerja/8.jpg"></BlogImage>
				<BlogImage src="nerja/9.jpg"></BlogImage>
				<BlogImage src="nerja/11.jpg"></BlogImage>
				<BlogImage src="nerja/10.jpg"></BlogImage>
				<BlogImage src="nerja/15.jpg"></BlogImage>
				<BlogImage src="nerja/16.jpg"></BlogImage>
				<BlogImage src="nerja/12.jpg"></BlogImage>
				<BlogImage src="nerja/18.jpg"></BlogImage>
				<BlogImage src="nerja/17.jpg"></BlogImage>
				<BlogImage src="nerja/1.jpg"></BlogImage>
				<BlogImage src="nerja/13.jpg"></BlogImage>
				<BlogImage src="nerja/14.jpg"></BlogImage>
			</div>

		</>
}

