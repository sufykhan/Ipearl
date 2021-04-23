import React from "react";
import { Route } from "react-router-dom";
import ClassScreen from "./Screens/ClassScreen";
import Home from "./Screens/Home";
import Calendar from "./Screens/Calendar";
import Course from "./Screens/Course";
import "./styles.css"
const App = () => {
  return (
    <>
          <Route path="/course" exact>
            <ClassScreen />
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/calendar" exact>
            <Calendar/>
          </Route>
        <Route path="/course_id/:course_id"exact >
          <Course/>
        </Route>

    </>
  );
};

export default App;
