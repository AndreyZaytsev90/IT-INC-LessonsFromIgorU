import React, {ChangeEvent} from 'react';

type NewInputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const NewInput = (props: NewInputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }

    return (
        <div>
            <input type="text" value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

