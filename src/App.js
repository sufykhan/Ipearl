import Navbar from "./Components/Navbar"
import {Route,Switch,useLocation} from "react-router-dom"
import "./styles.css"
import Home from "./Screens/Home"
import Calendar from "./Screens/Calendar"
import Course from "./Screens/Course"

function App() {
  const location=useLocation()
  const navbarHome=["/","/calendar","/settings","/archivedClasses"]
  
  return (
    <>
      {navbarHome.includes(location.pathname) &&<Navbar/>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={Calendar}/>
        <Route path="/course_id/:course_id" component={Course} />
      </Switch>
    </>
  );
}

export default App;
