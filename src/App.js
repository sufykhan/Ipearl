import React from "react";
import { Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
const App = () => {
  return (
    <>
     
          <Route path="/" exact>
            <Homescreen />
          </Route>

    </>
  );
};

export default App;
