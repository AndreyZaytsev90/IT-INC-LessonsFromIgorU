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
            {props.students.map((objectFromStudentArray, index, array) => {
                return (
                    <li key={objectFromStudentArray.id}>
                    <span>{objectFromStudentArray.name}</span>
                    <span> age: {objectFromStudentArray.age}</span>

                    </li>
                )
            })}
        </ul>
    );
};

export default NewComponent;