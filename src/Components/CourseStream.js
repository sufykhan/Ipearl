import { Container, Grid, makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:"1rem 1rem"
    },
    classTitle: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:"1rem 1rem",
      height:"20vh"
    },
    Tabs1:{
        background:'#c2c2c2',
    }
  }));


const CourseStream = () => {
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper className={classes.classTitle}  elevation={3}>
                    <div style={{fontSize:"4rem"}}>Course Name will be here</div>
                </Paper>
            </Grid>

            </Grid>
            <div >
          <Tabs value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
    className={classes.Tabs1}>
          <Tab label="Stream"/>
          <Tab label="Classroom"/>
          <Tab label="People"/>
          </Tabs>
          </div>
            <Grid container>

            <Grid container xs={3}>
                <Paper className={classes.paper}   elevation={2}>
                    Any updates here
                    <div>
                        This is the Classroom Section
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
