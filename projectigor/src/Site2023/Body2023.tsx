import React from 'react';

type Body2023PropsType = {
    text: string
}
export const Body2023 = (props: Body2023PropsType) => {
    return (
        <div>
            {props.text}
        </div>
    );
};
