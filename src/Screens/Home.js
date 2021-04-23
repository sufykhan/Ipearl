import { useLocation } from "react-router"
import Navbar from "../Components/Navbar"
import YourCourses from "../Components/YourCourses"

const Home=()=>{

   
  const location=useLocation()
  const navbarHome=["/","/calendar","/settings","/archivedClasses"]
  
  return (
    <>
      {navbarHome.includes(location.pathname) &&<Navbar/>}
    
        <div className="homeContainer">
            <YourCourses/>
        </div>
    </>)
}

export default Home