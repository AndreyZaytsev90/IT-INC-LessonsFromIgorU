import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./Button/components/Button";
import NewComponent from "./Map/components/NewComponent";


function App() {
    const Button1Foo = (subscriber:string, age: number, address: string) => {
        console.log(subscriber + ", I am " + age + " years old. " + address)
    }
    const Button2Foo = (subscriber:string, age: number) => {
        console.log(subscriber + ", I am " + age + " years old.")
    }
    const Button3Foo = () => {
        console.log("I am Stupid Button")
    }

    return (
        <div className="App">

            {/*<button>MyYouTubeChannel-1</button>
            <button>MyYouTubeChannel-2</button>*/}
            <Button name={"MyYouTubeChannel-1"} callback={() => Button1Foo("I am Andrey", 31, "I live in Moscow")}/>
            <Button name={"MyYouTubeChannel-2"} callback={() => Button2Foo("I am Olga", 33)}/>
            <Button name={"Button"} callback={Button3Foo}/>
            <NewComponent students={""} />

        </div>
    );
}

export default App;