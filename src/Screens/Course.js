import React from 'react'
import {useParams} from "react-router-dom"
import CourseStream from '../Components/CourseStream'
import NavbarCustom from "../Components/NavbarCustom"

const Course =()=>{
    let {course_id}= useParams()
    return (<>
            <NavbarCustom/>
            <CourseStream course_id={course_id} />
    </>)
}

export default Course;