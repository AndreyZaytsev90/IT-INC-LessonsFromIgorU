import React from 'react';
import styles from "../../../src/style.module.css"

type Button2023PropsType = {
    name: string
    callback: () => void

}
export const Button2023 = (props: Button2023PropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
      <button className={styles.loginButton}
              onClick={onClickHandler}>{props.name}</button>
    );
};
