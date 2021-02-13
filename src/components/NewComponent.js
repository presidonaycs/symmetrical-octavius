import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import InputAdornment from '@material-ui/core/InputAdornment';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from "@material-ui/icons/HomeOutlined";
import emblem from './images/Emblem.jpg'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, TextField, Badge, Avatar } from '@material-ui/core';
import Dashboard from '../pages/Dashboard';
import Greeting from './Greeting'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    '& > *':{
      fontSize:'15px'
    },
  },

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    fontSize:'15px'
  },
  emblem:{
    marginLeft: 20,
    
},
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    padding: theme.spacing(3),
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    width:'100%',
    alignItems:'center'
},


}));
document.body.style = 'background: lightgrey';


export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
       <div className={classes.list}>
          <div style={{width:'300px'}}>
            <TextField
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <SearchOutlined />
                </InputAdornment>
              )}}
                placeholder='Search transactions, invoices or help'
                fullWidth
                style={{marginLeft:'24px'}} 
            />
            
          </div>
          <div className={classes.root}>          
                  <Box style={{padding:'12px'}}><Badge color="secondary" badgeContent='' variant='dot'>
                      <NotificationsIcon />
                    </Badge></Box>
                     <Divider orientation='vertical' flexItem />           
                                  
                    <Box style={{padding:'12px'}}>Home</Box>
                    <Box style={{padding:'12px'}}>Notification</Box>
                    <Box style={{padding:'12px'}}>Set Reminder</Box>         
                    <Divider orientation='vertical' variant='middle' flexItem /> 

                  <div className={classes.root}>
                    <div style={{display:'flex'},{padding:'5px'}, {flexDirection:'column'}, {justifyContent:'flex-end'}}>              
                      <Box>Osagie Osaigbovo </Box>
                      <Box style={{fontSize:'x-small'}}>Officer 1</Box>
                    </div> 

                    <Avatar></Avatar> 
                    <ArrowDropDownIcon style={{ fontSize:'24px'}} color='secondary'/>
                  </div>
          </div>
        </div>
       
                        
      
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <img src={emblem} height='60' className ={classes.emblem} alt= 'emblem'/>
          <Router>
          <Divider />
          <List>
          <List>
                  {[{name: "Home", icon: <HomeIcon />, link:"Dashboard"}, {name: "Dashboard", icon: <MailOutlinedIcon />, link:"Dashboard"}, {name: "Request Maintenance", icon: <InboxIcon />, link:"ReviewRequest"}, {name: "Review Request", icon: <ForumIcon />, link:"ReviewRequest"}, {name: "Manage Request", icon: <AssignmentIcon />, link:"ReviewRequest"}, {name: "Settings", icon: <SettingsIcon />, link:"ReviewRequest"}, {name: "Report", icon: <PersonIcon />, link:"ReviewRequest"}, {name: "Log out", icon: <PowerSettingsNewIcon />, link:"ReviewRequest"}].map((text) => (
                            <ListItem button key={text} component={text.link} to='/ReviewRequest' >
                            <ListItemIcon >{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name} />
                            </ListItem>
                        ))}
                    </List>
        </List>
        </Router>
        </div>

      </Drawer>
      <main className={classes.content} style={{backgroundColor:'lightgray'}}>
        <div className={classes.toolbar} />
              yesssrr
        <CssBaseline />
            
      </main>
    </div>
  );
}
