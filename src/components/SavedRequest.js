import { Button, IconButton, withStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import React from 'react'
const BooButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '2px 8px',
        borderRadius: '20px 20px 20px 20px',
        width:'140px',
        lineHeight: 2.1,
        backgroundColor: 'lightgreen',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: 'green',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: 'none',
            borderColor: 'none',
        },

    },
})(Button);

export default function SavedRequest(props) {
    return (
        <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'white', alignItems:'center', padding:'2px'}}>
            <div style={{ width:'600px',display:'flex', wordBreak:'break-word', fontSize:'15px', marginLeft:'16px'} }>
                {props.title}
            </div>
            <div style={{display:'flex'}}>
                <div style={{marginRight:'3px', marginTop:'10px'}}>
                    <BooButton>Submit Request</BooButton>
                </div>
                <div style={{marginLeft:'3px'}}>
                   <IconButton><EditIcon style={{backgroundColor:'lightgreen',borderRadius:'2px', fontSize:'25px'}}/></IconButton> 
                </div>
                <div style={{marginLeft:'0px'}}>
                    <IconButton ><DeleteIcon style={{backgroundColor:'red',borderRadius:'2px', fontSize:'25px'}}/></IconButton>
                </div>
            </div>
        </div>
    )
}
