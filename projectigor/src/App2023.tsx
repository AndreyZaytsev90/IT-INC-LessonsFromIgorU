import React from 'react';
import {Header2023} from "./Site2023/Header2023";
import {Body2023} from "./Site2023/Body2023";
import {Footer2023} from "./Site2023/Footer2023";
import {NewComponent2023} from "./Map/components/NewComponent2023";

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
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div>
            <Header2023 title={'HelloWorld!'}/>
            <Body2023 text={"I am Andrey and i a programmer!"}/>
            <NewComponent2023 students={students} cars={topCars}/>
            <Footer2023 text={2023}/>
        </div>
    );
};

export default App2023;