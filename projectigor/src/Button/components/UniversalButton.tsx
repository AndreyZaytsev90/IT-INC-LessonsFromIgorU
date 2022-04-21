import React from 'react';

type UniversalButtonPropsType = {
    name: string
    callBack: () => void
}

const UniversalButton = (props: UniversalButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default UniversalButton;