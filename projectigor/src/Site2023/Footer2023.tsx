import styles from "../style.module.css";

type Footer2023PropsType = {
    text: number
}
export const Footer2023 = (props: Footer2023PropsType) => {
    return (
        <div className={styles.footerComponent}>{props.text}</div>
    )
}