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
    <button className={
      props.name === "LOGIN" ? styles.loginButton :
        props.name === '0' ? styles.loginButtonZero :
          props.name === 'PlusOne' ? styles.loginButtonPlusOne : ''}
            onClick={onClickHandler}>{props.name}</button>
  );
};
