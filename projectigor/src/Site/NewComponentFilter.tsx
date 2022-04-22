import React from 'react';
import {FilterType, MoneyType} from "../App1";

type NewComponentFilterType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (nameButton: FilterType) => void
}

const NewComponentFilter = (props: NewComponentFilterType) => {
    return (
        <div>
            {props.currentMoney.map((banknote, index) =>
                <li key={index}>
                    <span>{banknote.banknots}</span>
                    <span>{banknote.value}</span>
                    <span>{banknote.number}</span>
                </li>)}
            <div style={{marginLeft: "25px"}}>
                <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            </div>
        </div>
    );
};

export default NewComponentFilter;