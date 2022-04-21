import React from "react";

type StudentsPropsType = {
    id: string,
    name: string,
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}

export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    return (
        <div>
            <div>
                {props.students.map((student) => <ul key={student.id}>
                    <li> {`Hey! my name is ${student.name}, and I am ${student.age} years old`}</li>
                </ul>)}
            </div>
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                    </tr>
                    {topCars.map((car, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )}
                </table>
        </div>
    )
};

