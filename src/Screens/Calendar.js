import { useLocation } from "react-router"

const Calendar=()=>{
    const location=useLocation()
  const navbarHome=["/","/calendar","/settings","/archivedClasses"]
  
  return (
    <>
        <h1 style={{fontSize:"10rem"}}>Calendar</h1>
        <p>Work is in progress</p>
    </>)
}

export default Calendar