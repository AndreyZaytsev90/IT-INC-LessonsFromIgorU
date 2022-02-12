import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button/components/Button";
import NewComponent from "./Map/components/NewComponent";


function App() {

    /*let a = 1*/

    let[a, setA] = useState(1)

    const Button1Foo = (subscriber:string, age: number, address: string) => {
        console.log(subscriber + ", I am " + age + " years old. " + address)
    }
    const Button2Foo = (subscriber:string, age: number) => {
        console.log(subscriber + ", I am " + age + " years old.")
    }
    const Button3Foo = () => {
        console.log("I am Stupid Button")
    }

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
        {id: 10, name: "Christopher", age: 100},
    ]

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerDumping = () => {
        setA(0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerDumping}>dumping</button>

            {/*<button>MyYouTubeChannel-1</button>
            <button>MyYouTubeChannel-2</button>*/}
            <Button name={"MyYouTubeChannel-1"} callback={() => Button1Foo("I am Andrey", 31, "I live in Moscow")}/>
            <Button name={"MyYouTubeChannel-2"} callback={() => Button2Foo("I am Olga", 33)}/>
            <Button name={"Button"} callback={Button3Foo}/>
            <NewComponent key={""} students={students}/>

        </div>
    )
}

export default App;