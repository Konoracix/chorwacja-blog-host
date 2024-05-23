import styles from "./Profile.module.css";
import BlogImage from "@/components/BlogImage/Blogimage";

export default function Sacromonte() {
		return <>

			
			<div className={styles.mainPageTitle}>Yoga</div>
			<div className={styles.blogPost}>Niedawno miełam okazję wziąć udział w zajęciach z Bollywood Yogi i było to niezwykłe doświadczenie, które połączyło energetyczne tańce Bollywood z relaksującymi technikami jogi. Zajęcia odbywały się w lokalnym parku, gdzie przywitała nas instruktorka pełna pozytywnej energii. Już od pierwszych chwil czułem, że czeka mnie coś wyjątkowego.

Zaczęliśmy od dynamicznej rozgrzewki przy dźwiękach rytmicznej muzyki Bollywood. Instruktorka pokazała nam kilka prostych kroków tanecznych, które potem płynnie łączyliśmy z yogowymi asanami. Ruchy były pełne gracji, a jednocześnie dynamiczne, co pozwoliło nam poczuć zarówno radość z tańca, jak i głęboki spokój charakterystyczny dla jogi. Na zakończenie zajęć przeszliśmy do ćwiczeń oddechowych i krótkiej medytacji, które pomogły nam wyciszyć umysł po intensywnej części tanecznej. Było to wspaniałe doświadczenie, które nie tylko poprawiło moją kondycję fizyczną, ale również wprawiło mnie w doskonały nastrój na resztę dnia.</div>
			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="yoga/2.jpg" style={{width: "50vw"}} alt="asd" />
			</div>
			<div className={styles.imagesContainer}>
				<BlogImage src="yoga/1.jpg"></BlogImage>
				<BlogImage src="yoga/3.jpg"></BlogImage>
				<BlogImage src="yoga/4.jpg"></BlogImage>
				<BlogImage src="yoga/5.jpg"></BlogImage>
				<BlogImage src="yoga/6.jpg"></BlogImage>
			</div>

		</>
}

