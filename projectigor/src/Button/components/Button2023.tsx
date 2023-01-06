import React from 'react';

type Button2023PropsType = {
    name: string
    callback: () => void
}
export const Button2023 = (props: Button2023PropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};
