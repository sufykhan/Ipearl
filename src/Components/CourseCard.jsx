import {NavLink} from "react-router-dom"
import {makeStyles} from "@material-ui/styles"
import {Tooltip} from "@material-ui/core"
import FolderIcon from '@material-ui/icons/Folder';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles=makeStyles({
    courseLink:{
        color:'grey',
        margin:'0 0.5rem'
    }
})

const CourseCard=(props)=>{
    //usestyles hook
    const classes=useStyles();

    return(<>
        <div className="courseCardContainer">
           <div className="courseCardTop" style={{background:`url("${props.courseImage}") no-repeat center`,backgroundSize:'cover'}}>
               <h3>{props.courseName}</h3>
               <p>{props.description}</p>
               <p>{props.instructorName}</p>
               <img class="courseInstructorImage" src={props.instructorAvatar} alt="courseInstuctor Image"/>
           </div>
           <div className="courseCardMiddle">
           </div>
           <div className="courseCardDown">
              <Tooltip title="Your submission">
               <NavLink className={classes.courseLink} to="course/todo"><FolderIcon/></NavLink>
              </Tooltip>
              <Tooltip title="Open Drive">
                <NavLink className={classes.courseLink} to="course/profile"><AccountBoxIcon/></NavLink>
              </Tooltip>
              <Tooltip title="Go to course">
                <NavLink className={classes.courseLink} 
                to={`course_id/`+props.courseName}><ExitToAppIcon/></NavLink>
              </Tooltip>
           </div>
        </div>
    </>)
}

export default CourseCard;