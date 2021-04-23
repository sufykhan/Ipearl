import Array1 from "./Array1.js"
import CourseCard from "./CourseCard"

const YourCourses=()=>{
    return(<>

        <h2 className="yourCoursesHeading">Your are Registered for </h2>
        <div className="yourCourses">
            {Array1.map((props)=><CourseCard key={props.key} courseName={props.courseName} description={props.description} instructorName={props.instructorName}
            instructorAvatar={props.instructorAvatar}
            courseImage={props.courseImage}
            />)}
        </div>
    </>)

}

export default YourCourses;