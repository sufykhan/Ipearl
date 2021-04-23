import React from "react";
import { Route } from "react-router-dom";
import ClassScreen from "./Screens/ClassScreen";
const App = () => {
  return (
    <>
          <Route path="/course" exact>
            <ClassScreen />
          </Route>

    </>
  );
};

export default App;
