import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function loscahorros() {
		return <>

			
			<div className={styles.mainPageTitle}>Niño de las Pinturas</div>
			<div className={styles.blogPost}>Dzisiaj mieliśmy przyjemność odkryć magiczny świat street artu w Hiszpanii, podążając śladami lokalnego geniusza graffiti - Niño de las Pinturas&apos;a. Ta barwna wycieczka po Granadzie odkryła przed nami nowe oblicze miasta i otworzyła oczy na niezwykłą moc sztuki ulicznej. Podróżując szlakiem dzieł Niño de las Pinturas&apos;a, odkryliśmy nie tylko piękno sztuki ulicznej, ale także moc jej transformacji i oddziaływania na społeczeństwo. To niezwykłe doświadczenie pozwoliło nam spojrzeć na miasto z zupełnie innej perspektywy i pozwoliło docenić niezwykłość lokalnego talentu.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="graficiarz/21.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				<BlogImage src="graficiarz/1.jpg"></BlogImage>
				<BlogImage src="graficiarz/2.jpg"></BlogImage>
				<BlogImage src="graficiarz/3.jpg"></BlogImage>
				<BlogImage src="graficiarz/5.jpg"></BlogImage>
				<BlogImage src="graficiarz/7.jpg"></BlogImage>
				<BlogImage src="graficiarz/9.jpg"></BlogImage>
				<BlogImage src="graficiarz/10.jpg"></BlogImage>
				<BlogImage src="graficiarz/11.jpg"></BlogImage>
				<BlogImage src="graficiarz/13.jpg"></BlogImage>
				<BlogImage src="graficiarz/15.jpg"></BlogImage>
				<BlogImage src="graficiarz/17.jpg"></BlogImage>
				<BlogImage src="graficiarz/4.jpg"></BlogImage>
				<BlogImage src="graficiarz/6.jpg"></BlogImage>
				<BlogImage src="graficiarz/8.jpg"></BlogImage>
				<BlogImage src="graficiarz/12.jpg"></BlogImage>
				{/* <BlogImage src="graficiarz/14.jpg"></BlogImage> */}
				<BlogImage src="graficiarz/16.jpg"></BlogImage>
				<BlogImage src="graficiarz/19.jpg"></BlogImage>
				<BlogImage src="graficiarz/20.jpg"></BlogImage>
				<BlogImage src="graficiarz/21.jpg"></BlogImage>
			</div>

		</>
}

