import React from 'react'
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon, Card, CardContent } from '@material-ui/core';
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
        fontSize: '16px'


    },
    myDivs: {
        fontSize: '14px',
        marginTop: '12px',
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

export default function MemoSide({onChange}) {

    const classes = useStyles();
    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo';
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};

    



    return (
        <Box flexDirection='column' style={{ justifyContent: 'space-between' }}>
            <div style={{ width: '21.5vw' }}>

                <div className={classes.root}>
                    <Card style={{ marginBottom: '1vw', height: '13vw', justifyContent: 'space-between' }}>
                        <Box style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '20px' }}>
                            <Box style={{ margin: '10px 0px 10px 0px' }}>
                                <FormControl className={classes.formControl} >
                                    <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize:'1.3em', paddingBottom:'1vw' }}>
                                        Select Request type:
                                </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-placeholder-label-label"
                                        id="demo-simple-select-placeholder-label"
                                        
                                        onSelect={onChange}
                                        displayEmpty
                                        disableUnderline
                                        style={{ width: '20vw' }}
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value={'Facility Maintenance'} >
                                            <span style={{ fontSize: '16px' }}>Facility Maintenance</span>
                                        </MenuItem>
                                        <MenuItem value={'Energy & Power Maintenance'}>Energy & Power Maintenance</MenuItem>
                                        <MenuItem value={'Office Equipment'}>Office Equipment</MenuItem>
                                        <MenuItem value={'Ofice Space Request'}>Office Space Request</MenuItem>
                                        <MenuItem value={'Work Space Management'}>Work Space Management</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.myDivs} fontSize='12px'><span style={{ fontWeight: 'bolder', size: '18vw',  margin: '10px 0px 10px 0px' }}> Memo initiation date: </span> {initiationDate}</Box>
                            <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw',fontSize:'12px', margin: '10px 0px 10px 0px' }}>Memo initiator:</span> {initiator}</Box>
                            <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw',fontSize:'12px', margin: '10px 10px 20px 0px' }}>View Memo:</span> {viewMemo}</Box>
                        </Box>
                    </Card>
                    <Card style={{ marginBottom: '1vw' }}>
                        <div className={classes.costBox}>
                            <div className={classes.innerDiv}>
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>Cost implication</Box>
                                <Divider flexItem variant='middle' />
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>(N)</Box>
                            </div>
                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.innerDiv} style={{ justifyContent: 'space-between', alignItems:'left' }}>
                                <Box style={{ margin: '8px',justifyContent: 'space-evenly', alignItems:'left' }}>{cost}</Box>
                                <a href='#' style={{ fontSize: '17px' }}>payment Approval <SaveAltIcon size="small" style={{ fontSize: '16px' }} /></a>
                            </Box>
                        </div>
                    </Card>
                    <Paper style={{ justifyContent: 'space-between', alignItems:'flex-start' }} >
                      
                            <Box style={{ display: 'flex', alignItems: 'center',paddingLeft:'1vw' }}>
                                <Box style={{ fontWeight: 'bolder'}, { paddingRight: '13px' }, { fontSize: '16px' }}>Status:
                                 </Box> 
                                  <Box style={{ paddingLeft: '1vw' }}><SvgIcon style={{ marginTop: '13px', fontSize: '20px' }}><Circle /></SvgIcon>
                                </Box>
                             </Box>
                       
                    </Paper>
                    <Card style={{ justifyContent: 'space-between, space-evenly', alignItems:'flex-start', marginTop:'1vw' }}>
                        <Box style={{ display: 'flex', alignItems: 'center',padding:'1vw' }} >
EhigiaMouse Emmanuel, DOAS
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center',padding:'1vw' }} >
EhigiaMouse Emmanuel
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center',padding:'1vw' }} >
EhigiaMouse Emmanuel
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center',padding:'1vw' }} >
EhigiaMouse Emmanuel
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center',padding:'1vw' }} >
EhigiaMouse Emmanuel
                        </Box>
                    </Card>

                </div>

            </div>
        </Box>
    )
}
