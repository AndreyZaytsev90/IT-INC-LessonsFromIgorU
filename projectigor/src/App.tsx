import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button/components/Button";
import NewComponent from "./Map/components/NewComponent";
import {ComponentFilter} from "./Filter/components/ComponentFilter";
import {FullInput} from "./Input/components/FullInput";
import {Input} from "./Input/components/Input";


type FilterType = "All" | "Rubles" | "Dollars"


function App() {

    /*let a = 1*/

    let [a, setA] = useState(1)

    let [money, setMoney] = useState([
        {banknots: 'Dollars ', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES ', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars ', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES ', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES ', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money

    if (filter === "Dollars") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars ')
    }
    if (filter === "Rubles") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLES ')
    }


    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber + ", I am " + age + " years old. " + address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
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

    const onClickHandlerMoney = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    let [title, setTitle] = useState("")
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message] )
        setTitle("")
    }


    return (
        <div className="App">

            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerDumping}>dumping</button>

            {/*<button>MyYouTubeChannel-1</button>
            <button>MyYouTubeChannel-2</button>*/}

            <div>
                <Button name={"MyYouTubeChannel-1"} callback={() => Button1Foo("I am Andrey", 31, "I live in Moscow")}/>
                <Button name={"MyYouTubeChannel-2"} callback={() => Button2Foo("I am Olga", 33)}/>
                <Button name={"Button"} callback={Button3Foo}/>
            </div>

            <NewComponent students={students}/>
            <ComponentFilter currentMoney={currentMoney}/>

            <Button name={"Dollars"} callback={() => onClickHandlerMoney("Dollars")}/>
            <Button name={"Rubles"} callback={() => onClickHandlerMoney("Rubles")}/>
            <Button name={"All"} callback={() => onClickHandlerMoney("All")}/>

            <div>
               {/* <FullInput addMessage={addMessage}/> */}
                <Input setTitle ={setTitle} title={title}/>
                <Button name={"+"} callback={() => {addMessage(title)}}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )

                })}
            </div>
        </div>
    )
}

export default App;