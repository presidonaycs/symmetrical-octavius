import { Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper } from '@material-ui/core';
import React from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import LensIcon from '@material-ui/icons/Lens';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { TextareaAutosize } from '@material-ui/core';
import Greeting from '../components/Greeting';

const TextArea = withStyles({
    root:{
        width:'150px',
        height:'200px'
    },
    body:{
        minWidth:'150px',
        height:'200px'
    }
})(TextField)


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    myDivs:{
        fontSize:'12px',
        padding:'6px',
        

    },
    root:{
        display:'flex',
        maxWidth:'260px',
        flexWrap:'wrap',
        borderRadius:'4px'
    },
    costBox:{
        display:'flex',
        flexDirection: 'column',
        margin:10
    },

    innerDiv:{
        display:'flex', 
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:'12px',
        padding:'6px',
        width:'226px',
        borderRadius:'3px'

    }
  }));

const RequestMaintenance = () => {

    const classes = useStyles();

    const [requestType, setRequestType] = React.useState('');

    const handleChange = (event) => {
      setRequestType(event.target.value);
    };

    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo' ;
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};
    return (
        
        <Grid container style={ {display:'flex'}} alignItems='center' justify='center'  >
            <Grid item sm={3}>
                <div className={classes.root}>
                    <Paper style={{marginBottom:'8px'}}>
                    <div style={ {backgroundColor:'white'}, {border:'1px solid blue'},{borderRadius:'3px'}, {margin:'10px'} }>
                        <div >
                                <FormControl className={classes.formControl} >
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Select Request type:
                                </InputLabel>
                                <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={requestType}
                                onChange={handleChange}
                                displayEmpty
                                disableUnderline
                                style={{minWidth:'220px'}}
                                className={classes.selectEmpty}
                                >
                                    <MenuItem value="">
                                        <em>Facility Maintenance</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                   
                        <Divider/>
                        <div className={classes.myDivs}><span style={{fontWeight:'bolder'}}>Memo initiation date:</span> {initiationDate}</div>
                        <div className={classes.myDivs}> <span style={{fontWeight:'bolder'}}>Memo initiator:</span> {initiator}</div>
                        <div className={classes.myDivs}> <span style={{fontWeight:'bolder'}}>View Memo:</span> {viewMemo}</div>
                    </div>
                    </Paper>
                    <Paper style={{marginBottom:'8px'}}>
                    <div className={classes.costBox}>
                        <div className={classes.innerDiv}>
                            <Box>cost implication</Box>
                            <Box>(N)</Box>
                        </div>

                        <div className={classes.innerDiv}>
                            <Box>{cost}</Box>
                            <Box>payment Approval <SaveAltIcon size="small"/></Box>
                        </div>
                    </div>
                    </Paper>
                    <Paper style={{ minWidth:'226px'}, {margin:'10px'}}>
                    <div className={classes.myDivs} style={{ minWidth:'240px'}}>
                    <span style={{fontWeight:'bolder'}, {paddingRight:'13px'}}>Status: </span>  <Brightness1Icon style={{fontSize:'12px'}}/> 
                    </div>
                    </Paper>

                </div>
            </Grid>

            <Grid item sm={7} >
                <div >
                    <Paper style={{marginTop:'147px'}}>
                        <div style={{width:'100%'}}>
                            <TextField
                                id="outlined-details-static"
                                label="Subject:"
                                multiline
                                InputProps={{ disableUnderline: true }}
                                rows={2}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{width:'100%'},{backgroundColor:'white'},{margin:'0px'}}
                                fullWidth


                             />
                        </div>
                        <Divider />

                        <div>
                            <TextField
                                id="outlined-details-stati"
                                label="Details:"
                                multiline
                                cols={90}
                                rows={20}
                                style={{width:'100%'},{backgroundColor:'white'}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{ disableUnderline: true }}

                            />
                        </div>
                    </Paper>
                    </div>
            </Grid>
        </Grid>
    );
};

export default RequestMaintenance;