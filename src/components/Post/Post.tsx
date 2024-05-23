import { title } from 'process'
import styles from './Post.module.css'
type PostProps = {
	src: string,
	title: string,
	children?: JSX.Element | string
}
export default function Post (props: PostProps) {
	// console.log(props.title.toLowerCase().replaceAll(' ', '-'))
	return <div className={styles.blogPost}>
		<img src={props.src} alt="" />
		<h2>{props.title}</h2>
		<span>
			{props.children}
		</span>
	</div>
}