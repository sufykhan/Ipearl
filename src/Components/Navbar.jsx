import React,{useState} from "react"
import {NavLink} from "react-router-dom"
import {makeStyles} from "@material-ui/styles"
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArchiveIcon from '@material-ui/icons/Archive';
import {Avatar,Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Divider,Tooltip,Slide,SwipeableDrawer,List,ListItem,ListItemText } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  headerLink: {
    background: 'transparent',
    color:'rgb(68,68,68)',
    display:'block',
    textDecoration:"none",
    border: 0,
    borderRadius: '0 2rem 2rem 0',
    padding:'1rem',
    width:'15rem',
    display:'flex',
    alignItems:'center',
    transition:'all 0.5s ease',
    '&>p':{
        marginLeft:"1rem"
    },
    '&:hover':{
        background:'#d9fffd'
    }
  },
});

const Navbar=()=>{
    // usestyles hook
    const classes = useStyles();


    
     //for alert box
       const [openModal, setOpenModal] = React.useState(false);

        const handleClickOpenModal = () => {
            setOpenModal(true);
        };

        const handleCloseModal = () => {
            setOpenModal(false);
        }

    // state reacthooks
    const [state, setState] = useState({
        left: false,
       });
    
    // state reacthooks
    // for search button in navigation bar
    const [open, setOpen] =useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        alert("handleClose")
        setOpen(false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    return(
        <>

         <div className="navigationBar">
             <div className="navLeft">
                <div>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Tooltip title="Explore More" arrow>
                     <div className="iconContainer" onClick={toggleDrawer(anchor, true)} >
                      <MenuIcon />
                     </div>
                    </Tooltip>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                    <div className="navBarLinksContainer">
                       <NavLink 
                        onClick={toggleDrawer(anchor, false)}
                        activeClassName="ACTIVECLASSNAME" 
                        className={classes.headerLink} 
                        to="/"><HomeIcon/><p>Classes</p></NavLink>
                       <NavLink 
                       onClick={toggleDrawer(anchor, false)}
                       activeClassName="ACTIVECLASSNAME"  
                       className={classes.headerLink} 
                       to="/calendar"><CalendarTodayIcon/>  <p>Calendar</p></NavLink>
                       <Divider/>
                       <NavLink 
                       onClick={toggleDrawer(anchor, false)}
                       activeClassName="ACTIVECLASSNAME" 
                       className={classes.headerLink} 
                       to="/archivedClasses"><ArchiveIcon/><p>Archived Classes</p></NavLink>
                       <NavLink 
                       onClick={toggleDrawer(anchor, false)}
                       activeClassName="ACTIVECLASSNAME" 
                       className={classes.headerLink} 
                       to="/settings"><SettingsIcon/><p>Settings</p></NavLink>
                    </div>
                </SwipeableDrawer>
                </React.Fragment>
                ))}
                </div>
                 <p style={{fontWeight:"700"}}>I<span style={{color:"red"}}>I</span>T JA<span style={{color:"red"}}>M</span>MU</p>
             </div>
             <div className="navRight">
                 <div>
                    <Dialog
                        open={openModal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseModal}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={handleCloseModal} color="primary">
                            Agree
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                 <Tooltip title="Join Class">
                    <div className="iconContainer" onClick={handleClickOpenModal}>
                        <AddIcon/>
                    </div>
                 </Tooltip>
                <Avatar style={{marginRight:"1rem",transform:"scale(1)"}} alt="Remy Sharp" src="https://picsum.photos/100" />
             </div>
         </div>
        </>
    )
}

export default Navbar;