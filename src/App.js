import React from "react";
import { Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import ClassScreen from "./Screens/ClassScreen";
const App = () => {
  return (
    <>
     
          <Route path="/dummy" exact>
            <Homescreen />
          </Route>
          <Route path="/" exact>
            <ClassScreen />
          </Route>

    </>
  );
};

export default App;
