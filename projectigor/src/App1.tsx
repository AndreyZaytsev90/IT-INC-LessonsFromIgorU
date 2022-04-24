import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Body} from "./Site/Body";
import {Footer} from "./Site/Footer";
import {NewComponent} from "./Site/NewComponent";
import {v1} from "uuid";
import UniversalButton from "./Button/components/UniversalButton";
import NewComponentFilter from "./Site/NewComponentFilter";
import {UniversalInputButton} from "./Site/UniversalInputButton";


//-------------------------------------Filter-------------------------------------
export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'all' | 'dollars' | 'rubles'

//--------------------------------------------------------------------------------


function App1() {

    //-------------------------------------Map----------------------------------------
    const students = [
        {id: v1(), name: "James", age: 8},
        {id: v1(), name: "Robert", age: 18},
        {id: v1(), name: "John", age: 28},
        {id: v1(), name: "Michael", age: 38},
        {id: v1(), name: "William", age: 48},
        {id: v1(), name: "David", age: 58},
        {id: v1(), name: "Richard", age: 68},
        {id: v1(), name: "Joseph", age: 78},
        {id: v1(), name: "Thomas", age: 88},
        {id: v1(), name: "Charles", age: 98},
        {id: v1(), name: "Christopher", age: 100},
    ]
    //--------------------------------------------------------------------------------


    //------------------------------------Button--------------------------------------
    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I am Andrey")
    }
    const mySecondSubscriber = () => {
        console.log("Hello I am Olga")
    }*/
    /*const onClickHandler = (name: string) => {
        console.log(`Hello! I am ${name}`)
    }*/
    /*const function1 = () => {
        console.log(100200)
    }
    const function2 = (number: number) => {
        console.log(number)
    }*/
    /*const ButtonOne = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const ButtonTwo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const StupidButton = () => {
        console.log("I am stupid Button")
    }*/
    //--------------------------------------------------------------------------------

    //------------------------------------UseState------------------------------------
    /*let a = 1

    let[a, setA] = useState(1)

    const onClickHandler = (name: string) => name === "+1" ? setA(++a) : setA(0)*/
    //--------------------------------------------------------------------------------

    //-------------------------------------Filter-------------------------------------
    /*const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'dollars', value: 100, number: ' a1234567890'},
        {banknots: 'dollars', value: 50, number: ' z1234567890'},
        {banknots: 'rubles', value: 100, number: ' w1234567890'},
        {banknots: 'dollars', value: 100, number: ' e1234567890'},
        {banknots: 'dollars', value: 50, number: ' c1234567890'},
        {banknots: 'rubles', value: 100, number: ' r1234567890'},
        {banknots: 'dollars', value: 50, number: ' x1234567890'},
        {banknots: 'rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'dollars')
    }
    if (filter === 'rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'rubles')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }*/
    //--------------------------------------------------------------------------------

    //-------------------------------------Input-------------------------------------

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        console.log(title)
        const newMessage = {message: title}
        setMessage([newMessage, ...message])

    }


    return (
        <div className="App" style={{marginLeft: "25px"}}>
            {/*//-------------------------Вложенный компоненты----------------------*/}
            {/*<div>Hello World!</div>
            <Header title={"NEW HEADER"}/>
            <Body titleForBody={"NEW BODY"}/>
            <NewComponent students={students}/> -------------------- -----map
            <Footer titleForFooter={"NEW FOOTER"}/>*/}
            {/*----------------------------------------------------------------------*/}

            {/*-------------------------Button---------------------------------------*/}
            {/*<button onClick={(event) => {console.log("Hello")}}>FirstButton</button>*/}
            {/*   <button  onClick={(event) => onClickHandler("Andrey")}>FirstButton</button>
            <button  onClick={(event) => onClickHandler("Olga")}>SecondButton</button>*/}
            {/*<button onClick={function1}>1</button>
            <button onClick={(event) => function2(100200)}>2</button>*/}
            {/*<UniversalButton name={"FirstButton"} callBack={() => ButtonOne("I am Andrey", 31)}/>
            <UniversalButton name={"SecondButton"} callBack={() => ButtonTwo("I am Olga", 33)}/>
            <UniversalButton name={"I am stupid Button"} callBack={StupidButton}/>*/}
            {/*-------------------------------------------------------------------------*/}

            {/*-------------------------UseState----------------------------------------*/}
            {/*<h1>{a}</h1>
            <button name={"+1"} onClick={() => onClickHandler("+1")}>+1</button>
            <button name={"0"} onClick={() => onClickHandler("0")}>0</button>*/}
            {/*-------------------------------------------------------------------------*/}

            {/*-------------------------Filter------------------------------------------*/}
            {/* <NewComponentFilter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*/}
            {/*-------------------------------------------------------------------------*/}

            {/*-------------------------Input------------------------------------------*/}
            {/*<div>
                <input type="text"/>
                <button>Add</button>
            </div>*/}
            <UniversalInputButton addMessage={addMessage}/>
            {message.map((m, index) => {
                return <div key={index}>
                    {m.message}
                </div>
            })}
            {/*------------------------------------------------------------------------*/}
        </div>
    )
}

export default App1;