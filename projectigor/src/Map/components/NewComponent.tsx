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
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index, array)=>{
                return (
                    <li>{objectFromStudentArray.name}</li>
                )
            })}
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    );
};

export default NewComponent;