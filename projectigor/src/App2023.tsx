import React from 'react';
import {Header2023} from "./Site2023/Header2023";
import {Body2023} from "./Site2023/Body2023"
import {Footer2023} from "./Site2023/Footer2023";
import {NewComponent2023} from "./Map/components/NewComponent2023";
import {Button2023} from "./Button/components/Button2023";

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
    const ButtonOne = (subscriber: string, age: number ) => {
        console.log(`Hello i am ${subscriber}, I'm ${age} years old`)
    }
    const ButtonTwo = (subscriber: string, age: number) => {
        console.log(`Hello i am ${subscriber}, I'm ${age} years old`)
    }
    const ButtonThree = () => {
        console.log('I am a stupid button')
    }



    return (
        <div className="App">
            <Header2023 title={'HelloWorld!'}/>
            <Body2023 text={"I am Andrey and i a programmer!"}/>
            <NewComponent2023 students={students} cars={topCars}/>
            {/*<button onClick={(event) => {console.log("Hello")}}>MyYouTubeChannel-1</button>*/}
            <button onClick={(event) => onClickHandler("Andrey")}>MyYouTubeChannel-1</button>
            <button onClick={(event) => onClickHandler("Olga")}>MyYouTubeChannel-2</button>
         {/*   <button onClick={function1}>1</button>
            <button onClick={(event) => function2(100200)}>2</button>*/}
            <Button2023 name={'MyYouTubeChannel-1'} callback={() => ButtonOne('Andrey', 32)}/>
            <Button2023 name={'MyYouTubeChannel-2'} callback={() => ButtonTwo('Olga', 34)}/>
            <Button2023 name={'I am a stupid button'} callback={ButtonThree}/>
            <Footer2023 text={2023}/>
        </div>
    );
};

export default App2023;