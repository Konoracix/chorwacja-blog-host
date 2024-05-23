import styles from './Blogimage.module.css'

type PostProps = {
	src: string,
	children?: JSX.Element | string
}

export default function BlogImage(props: PostProps){
	return <img className={styles.image} src={props.src} alt="" />
}