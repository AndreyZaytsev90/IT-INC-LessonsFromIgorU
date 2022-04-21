import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Body} from "./Site/Body";
import {Footer} from "./Site/Footer";
import {NewComponent} from "./Site/NewComponent";
import {v1} from "uuid";
import UniversalButton from "./Button/components/UniversalButton";


function App1() {

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

    const ButtonOne = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const ButtonTwo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const StupidButton = () => {
        console.log("I am stupid Button")
    }


    return (
        <div className="App">
            {/*<div>Hello World!</div>
            <Header title={"NEW HEADER"}/>
            <Body titleForBody={"NEW BODY"}/>
            <NewComponent students={students}/>
            <Footer titleForFooter={"NEW FOOTER"}/>*/}
            {/*<button onClick={(event) => {console.log("Hello")}}>FirstButton</button>*/}
            {/*   <button  onClick={(event) => onClickHandler("Andrey")}>FirstButton</button>
            <button  onClick={(event) => onClickHandler("Olga")}>SecondButton</button>*/}
            {/*<button onClick={function1}>1</button>
            <button onClick={(event) => function2(100200)}>2</button>*/}
            <UniversalButton name={"FirstButton"} callBack={() => ButtonOne("I am Andrey", 31)}/>
            <UniversalButton name={"SecondButton"} callBack={() => ButtonTwo("I am Olga", 33)}/>
            <UniversalButton name={"I am stupid Button"} callBack={StupidButton}/>
        </div>
    )
}

export default App1;