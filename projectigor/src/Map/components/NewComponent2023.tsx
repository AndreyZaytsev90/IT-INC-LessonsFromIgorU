import React from 'react';

type NewComponent2023PropsType = {
    students: Array<StudentsType>,
    cars: Array<CarsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent2023 = (props: NewComponent2023PropsType) => {


    return (
        <div>
            <ul>
                {props.students.map((st, index) => {
                    return (
                        <li key={st.id}>name: {st.name}, age: {st.age}</li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.cars.map((cars, index) => {
                    return (
                        <tr >
                            <td style={{textAlign: "center"}}>{index+1}</td>
                            <td style={{textAlign: "center"}}>{cars.manufacturer}</td>
                            <td style={{textAlign: "center"}}>{cars.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>

    );
};

