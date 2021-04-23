import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Array1 from "./Array1"



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:"1rem 1rem",
    },
    classTitle: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:"1rem 1rem",
      height:"20vh"
    },
  }));

const CourseStream = (props) => {
    
    var reqInd=-1;
    for(var i=0;i<Array1.length;i++)
    {   if(Array1[i].courseName===props.course_id)
          {reqInd=i;
           break;
        }
    }

    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper className={classes.classTitle}  elevation={3}>
                    <div style={{fontSize:"2.5rem"}}>{Array1[reqInd].courseName+"("+Array1[reqInd].description+")"}</div>
                </Paper>
            </Grid>

            </Grid>
            <Grid container>

            <Grid container xs={3}>
                <Paper className={classes.paper}   elevation={2}>

                    <div
                      style={{display:"flex",flexDirection:"column",alignItems:"center"}}
                    >

                        <img
                         style={{width:`100px`,height:"100px",
                         borderRadius:"0.5rem",
                         objectPosition:"top",
                         objectFit:"cover",
                         marginBottom:"0.5rem"}}
                         src={Array1[reqInd].instructorAvatar} alt="your instructor for this course"/>
                        Your course Instructor
                        <b>{Array1[reqInd].instructorName}</b>
                    </div>
                </Paper>
                <Paper className={classes.paper}   elevation={2}>
                    Any updates here
                    <div>
                        This is the Classroom Section
                    </div>
                </Paper>
            </Grid>
            <Grid container xs={9}>
            {["Assigment 1 Annoucement","Assigment 2  Annoucement","Assigment 3 Annoucement","Assignment 4 Annoucement"].map((value)=>
                {return ( <Grid item xs={12}>
                   <Paper className={classes.paper}  elevation={2}>
                    Here will be the {value}
                   </Paper>
                 </Grid>);}
            )}
               
            </Grid>

            </Grid>
        </Container>
    )
}

export default CourseStream
