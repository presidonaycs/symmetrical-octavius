import { AppBar, colors, Divider, Drawer, Input, Grid, Typography, Box, Badge, Avatar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider, Theme, CssBaseline } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from "@material-ui/icons/HomeOutlined";
import NotificationsIcon from '@material-ui/icons/Notifications';
import emblem from './images/Emblem.jpg'
import { green, grey } from '@material-ui/core/colors';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import Greeting from './Greeting';
import { Component } from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500]
        }
    }
});

const sideBarWidth = 200;

const useStyles = makeStyles({


    root: {
       
    },

    appBar: {
       width: 'calc(100%  -  200px)',
       marginLeft: sideBarWidth,
       
    },

    drawer: {
        width: sideBarWidth,
        flexShrink:0
    },

    drawerPaper: {
        width: sideBarWidth
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 24,
      },

    emblem: {
        marginLeft: 20,
        
    },

    grid: {
        marginLeft: 20
    },

    toolbar: theme.mixins.toolbar,

    txtfld: {
        color: grey[400],
    },

    list: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
        padding: 0
    },
    profile:{
        '& > *':{padding: '16px',} 
    },

});

const SideBar = () => {
    const classes= useStyles();
    return (
        <ThemeProvider theme={theme} classsame={classes.root}>
            <CssBaseline />
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.list}>
                    <Box>
                        <TextField
                            className={classes.margin}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchOutlined />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Box>
                    <Box style={{display:'flex'}} className={classes.profile}>
                       <Box style={{padding:'16px'}}> <Badge color="primary" >
                            <NotificationsIcon />
                        </Badge> </Box> 
                        
                        <Box component='span' style={{padding:'16px'},{ fontColor: '#616161'}}>Home</Box>
                        <Box component='span' style={{padding:'16px'}}>Notification</Box>
                        <Box component='span'>Set Reminder</Box>
                        <Box componennt='span' style={{display:'flex'}}>
                            <div style={{display:'flex'}, {flexDirection:'column'}, {justifyContent:'flex-end'},{border:'1px solid red'}}>
                                <Box> Osagie Osaigbovo </Box>
                                <Box>Officer 1</Box>
                            </div>
                            <Box component='span'> <Avatar></Avatar> </Box>
                            <Box component='span'> <ArrowDropDownIcon /></Box>
                        </Box>
                        
                    </Box>
                </Toolbar>
            </AppBar>

            <Greeting />

            <Drawer 
            variant='permanent'
            classes={{paper: classes.drawerPaper}}
            anchor='left'
            >
                <div className={classes.toolbar}>
                    <img src={emblem} height='60' className ={classes.emblem} alt= 'emblem'/>
                    <Divider />
                    <List>
                        {[{name: "Home", icon: <HomeIcon />}, {name: "Dashboard", icon: <MailOutlinedIcon />}, {name: "Request Maintenance", icon: <InboxIcon />}, {name: "Review Reuest", icon: <ForumIcon />}, {name: "Manage Reuest", icon: <AssignmentIcon />}, {name: "Settings", icon: <SettingsIcon />}, {name: "Report", icon: <PersonIcon />}, {name: "Log out", icon: <PowerSettingsNewIcon />}].map((text) => (
                            <ListItem button key={text}>
                            <ListItemIcon >{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name} />
                            </ListItem>
                        ))}
                    </List>
                </div>

            </Drawer>

        </ThemeProvider>
    );
};

export default SideBar;