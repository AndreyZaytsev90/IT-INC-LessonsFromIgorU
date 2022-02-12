import React from 'react';

export type ComponentFilterPropsType = {
    currentMoney: Array<MoneyPropsType>
}

export type MoneyPropsType = {
    banknots: string,
    value: number,
    number: string
}


export const ComponentFilter = (props: ComponentFilterPropsType) => {
    return (
        <div>
            {props.currentMoney.map((money, index) => {
                return (
                    <li className="money" key={index}>
                        <span >{money.banknots}</span>
                        <span >{money.value}</span>
                        <span >{money.number}</span>
                    </li>
                )
            })}
        </div>
    );
};
