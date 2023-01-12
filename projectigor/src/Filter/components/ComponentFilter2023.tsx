import React from 'react';
import {Button2023} from "../../Button/components/Button2023";

type ComponentFilter2023PropsType = {
  currentMoney: Array<MoneyType>
  OnClickFilterHandler: (FilterType: 'All' | 'Rubles' | 'Dollars') => void
}

type MoneyType = {
  banknotes: string,
  value: number,
  number: string
}
export const ComponentFilter2023 = (props: ComponentFilter2023PropsType) => {
  return (
    <div>
      <ul>
        {props.currentMoney.map((banknotes, index) =>
          <li key={index}>
            <span style={{paddingLeft: '10px'}}>{banknotes.banknotes}</span>
            <span style={{paddingLeft: '10px'}}>{banknotes.value}</span>
            <span style={{paddingLeft: '10px'}}>{banknotes.number}</span>
          </li>
        )}
      </ul>
      <div style={{paddingLeft: '30px'}}>
        <Button2023 name={'Dollars'} callback={() => props.OnClickFilterHandler('Dollars')}/>
        <Button2023 name={'Rubles'} callback={() => props.OnClickFilterHandler('Rubles')}/>
        <Button2023 name={'All'} callback={() => props.OnClickFilterHandler('All')}/>
      </div>
    </div>
  );
};
