import React, {useState} from 'react';
import {Header2023} from "./Site2023/Header2023";
import {Body2023} from "./Site2023/Body2023"
import {Footer2023} from "./Site2023/Footer2023";
import {NewComponent2023} from "./Map/components/NewComponent2023";
import {Button2023} from "./Button/components/Button2023";
import {ComponentFilter2023} from "./Filter/components/ComponentFilter2023";
import Logo from "../src/assets/images/logo.svg"
import HomeIcon from "../src/assets/images/home-icon.svg"
import ComputerIcon from "../src/assets/images/computer-icon.svg"
import SandBox from "../src/assets/images/sandbox-icon.svg"
import Contacts from "../src/assets/images/map-pointer-icon.svg"
import styles from "./style.module.css"

type FilterType = 'All' | 'Rubles' | 'Dollars'

const App2023 = () => {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    /*  const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
          console.log("Hello i am Andrey")
      }
      const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
          console.log("Hello i am Olga")
      }
  */
    const onClickHandler = (name: string) => {
        console.log(`Hello i am ${name}`)
    }
    /* const function1 = () => {
         console.log(100200)
     }
     const function2 = (num: number) => {
         console.log(num)
     }*/
    const ButtonOne = (subscriber: string, age: number) => {
        console.log(`Hello i am ${subscriber}, I'm ${age} years old`)
    }
    const ButtonTwo = (subscriber: string, age: number) => {
        console.log(`Hello i am ${subscriber}, I'm ${age} years old`)
    }
    const ButtonThree = () => {
        console.log('I am a stupid button')
    }


    //4. UseState
    //let a = 1
    let [a, setA] = useState(0)

    const plusOne = () => {
        setA(++a)
    }
    const zero = () => {
        setA(0)
    }

    //5. Filter
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    }
    if (filter === 'Rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Rubles')
    }

    const OnClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <body>
            <header className={styles.header}>
                <a href="#" target='_blank'>
                    <img src={Logo} alt="logo"/>
                </a>
                <Header2023 title={'HelloWorld!'}/>
                <Button2023 name={"LOGIN"} callback={() => {}}/>
            </header>
            <section>
                <h1>
                    <Body2023 text={"I am Andrey and i a programmer!"}/>
                </h1>
                <div>
                    <h3>MAP</h3>
                    <NewComponent2023 students={students} cars={topCars}/>
                </div>
                <div>
                    <h3>Button</h3>
                    {/*<button onClick={(event) => {console.log("Hello")}}>MyYouTubeChannel-1</button>*/}
                    <button onClick={(event) => onClickHandler("Andrey")}>MyYouTubeChannel-1</button>
                    <button onClick={(event) => onClickHandler("Olga")}>MyYouTubeChannel-2</button>
                    {/*   <button onClick={function1}>1</button>
            <button onClick={(event) => function2(100200)}>2</button>*/}
                    <Button2023 name={'MyYouTubeChannel-1'} callback={() => ButtonOne('Andrey', 32)}/>
                    <Button2023 name={'MyYouTubeChannel-2'} callback={() => ButtonTwo('Olga', 34)}/>
                    <Button2023 name={'I am a stupid button'} callback={ButtonThree}/>
                </div>
                <div>
                    <h3>Universal Button with UseState</h3>
                    <span>
                        <h2>{a}</h2>
                        <Button2023 name={'PlusOne'} callback={plusOne}/>
                        <Button2023 name={'0'} callback={zero}/>
                    </span>
                </div>
                <div>
                    <h3>Filter</h3>
                    {/*  <ul>
              {currentMoney.map((banknotes, index) =>
                <li key={index}>
                  <span style={{paddingLeft: '10px'}}>{banknotes.banknotes}</span>
                  <span style={{paddingLeft: '10px'}}>{banknotes.value}</span>
                  <span style={{paddingLeft: '10px'}}>{banknotes.number}</span>
                </li>
              )}
            </ul>
            <div style={{paddingLeft: '30px'}}>
              <Button2023 name={'Dollars'} callback={() => OnClickFilterHandler('Dollars')}/>
              <Button2023 name={'Rubles'} callback={() => OnClickFilterHandler('Rubles')}/>
              <Button2023 name={'All'} callback={() => OnClickFilterHandler('All')}/>
            </div>*/}
                    <ComponentFilter2023
                        currentMoney={currentMoney}
                        OnClickFilterHandler={OnClickFilterHandler}
                    />
                </div>
            </section>
            <footer className={styles.footer}>
                <ul>
                    <li>
                        <a href="https://it-incubator.io/" target='_blank'>
                            <img src={HomeIcon} alt=""/>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://it-incubator.io/education/front-end" target='_blank'>
                            <img src={ComputerIcon} alt=""/>
                            All Courses
                        </a>
                    </li>
                    <li>
                        <a href="https://sandbox.it-incubator.io/" target='_blank'>
                            <img src={SandBox} alt=""/>
                            Sandbox
                        </a>
                    </li>
                    <li>
                        <a href="https://it-incubator.io/contacts" target='_blank'>
                            <img src={Contacts} alt=""/>
                            Contacts
                        </a>
                    </li>
                </ul>
                <Footer2023 text={2023}/>
            </footer>
            </body>
        </>

    );
};

export default App2023;