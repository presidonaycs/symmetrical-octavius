import React from 'react'
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { ReactComponent as Logo } from "./../components/iconComponent/upload.svg"
import LensIcon from '@material-ui/icons/Lens';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { TextareaAutosize } from '@material-ui/core';
import Greeting from '../components/Greeting';
import Link from '@material-ui/core/Link';
import { ReactComponent as Circle } from "./../components/iconComponent/circle-fill.svg"
import { faCircle } from '@fortawesome/free-solid-svg-icons';



const useStyles = makeStyles({
    costBox: {
        display: 'flex',
        flexDirection: 'column',
        fontSize:'16px'
        
        
    },
    myDivs: {
        fontSize: '16px',
        margin:'8px',
        fontFamily: 'auto',
    },
    innerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        padding: '6px',
       
        borderRadius: '3px',
        fontFamily: 'auto'

    },

})

export default function MemoSide() {

    const classes = useStyles();
    const [requestType, setRequestType] = React.useState('');
    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo';
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};
    
    const handleChange = (event) => {
        setRequestType(event.target.value);
    };



    return (
        <div>
        <div style={{width:'400px', margin:'0px', padding:'0px'}}>
            
                <div className={classes.root}>
                    <Paper style={{ marginBottom: '8px' }}>
                        <div style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '10px' }}>
                            <div >
                                <FormControl className={classes.formControl} >
                                    <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ minWidth: '420px' }}>
                                        Select Request type:
                                </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-placeholder-label-label"
                                        id="demo-simple-select-placeholder-label"
                                        value={requestType}
                                        onChange={handleChange}
                                        displayEmpty
                                        disableUnderline
                                        style={{ minWidth: '380px' }}
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="">
                                            <span style={{ fontSize: '16px' }}>Facility Maintenance</span>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        <MenuItem></MenuItem>
                                        <MenuItem value={2}>Energy Management</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <Divider />
                            <div className={classes.myDivs}><span style={{ fontWeight: 'bolder' }}> Memo initiation date: </span> {initiationDate}</div>
                            <div className={classes.myDivs}> <span style={{ fontWeight: 'bolder' }}>Memo initiator:</span> {initiator}</div>
                            <div className={classes.myDivs}> <span style={{ fontWeight: 'bolder' }}>View Memo:</span> {viewMemo}</div>
                        </div>
                    </Paper>
                    <Paper style={{ marginBottom: '8px' }}>
                        <div className={classes.costBox}>
                            <div className={classes.innerDiv}>
                                <Box style={{ fontWeight: 'bolder',margin:'8px' }}>Cost implication</Box>
                                <Box style={{ fontWeight: 'bolder',margin:'8px' }}>(N)</Box>
                            </div>

                            <div className={classes.innerDiv}>
                                <Box style={{margin:'8px'}}>{cost}</Box>
                                <a href= '#' style={{ fontSize: '16px' }}>payment Approval <SaveAltIcon size="small" style={{ fontSize: '16px' }} /></a>
                            </div>
                        </div>
                    </Paper>
                    <Paper style={{ minWidth: '226px' }, { marginTop: '10px' }}>
                        <div className={classes.myDivs} style={{ minWidth: '240px' }}>
                            <div style={{display:'flex', alignItems:'center'}}><div style={{ fontWeight: 'bolder' }, { paddingRight: '13px' }, {fontSize: '16px' }}>Status: </div>  <div style={{paddingLeft:'8px'}}><SvgIcon style={{ marginTop: '13px', fontSize:'20px' }}><Circle /></SvgIcon> </div> </div>
                        </div>
                    </Paper>

                </div>
            
        </div>
        </div>
    )
}