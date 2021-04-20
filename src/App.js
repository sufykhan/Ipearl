import React from "react";
import { Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import ClassScreen from "./Screens/ClassScreen";
const App = () => {
  return (
    <>
     
          <Route path="/" exact>
            <Homescreen />
          </Route>
          <Route path="/dummy" exact>
            <ClassScreen />
          </Route>

    </>
  );
};

export default App;
