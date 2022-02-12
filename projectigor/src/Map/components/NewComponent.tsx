import React from 'react';


type NewComponentPropsType = {
    //students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}


const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        /*<ul>
            {props.students.map((objectFromStudentArray, index, array) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>*/
        <div>
            {topCars.map((carsObject, index) => {
                return (
                    <table>
                        <tr>
                            <th>№</th>
                            <th>Manufacturer</th>
                            <th>Model</th>
                        </tr>
                        <tr>
                            <td key={index}>{index + 1}</td>
                            <td>{carsObject.manufacturer}</td>
                            <td>{carsObject.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    );
};

export default NewComponent;