import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LensIcon from '@material-ui/icons/Lens'
import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 10px',
    fontWeight:'bolder',
    lineHeight: 1,
    margin:'2px',
    backgroundColor: 'light-green',
    borderColor: 'light-green',
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
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'white',
      borderColor: 'white',
    },
    
  },
})(Button);




const StyldTableCell = withStyles({
  head: {
    backgroundColor: 'lightgrey',
    fontWeight:'bolder',
    

  },
  body: {
    fontSize: 14,
  },
})(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  clDiv:{
    backgroundColor: 'lightgreen',
    fontWeight:'bolder',
    display:'flex',
    padding:'10px',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:'14'

  }
  
  
});


function createData(items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action) {
  return { items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action};
}

const rows = [
  createData('asterix', 159, 6.0, 24, 4.0, 3, 5),
  createData('Ice cream sandwich', 237, 9.0, 37, <div><LensIcon style={{margin:'2px'}, {fontSize:'10px'}}/><span> </span><span>Johnn</span></div>, 56, 60),
  createData('Eclair', 262, 16.0, 24, 6.0, 55, 23),
  createData('Cupcake', 305, 3.7, 67, 4.3, 22, 45),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 45, 66),
];

export default function Tables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  

  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  





  return (

    <div>
      <div style={{display:'flex'}}>  
      <div style={{marginRight:'10px'}}><BootstrapButton color="primary" size='small' variant='contained' style={{borderRadius:'30px'}} onClick={handleOpen} endIcon={<ArrowDropDownIcon style={{ fontSize:'24px'}} color='default'/>}>Select an Option</BootstrapButton></div>
      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={''}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
                    <div style={{marginRight:'10px'}}>
                    <TextField
                      style={{backgroundColor:'lightgreen'}}
                      variant='outlined'
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start">
                      <SearchOutlined />
                      </InputAdornment>
                      
                      )}}
                      placeholder='Search transactions, invoices or help'
                      fullWidth 
                      margin='dense'
                    />
                    
                    </div>
      </div>
      <Grid container justify='center' alignItems='center'>
        <Grid item sm={9}>
            <TableContainer component={Paper} style={{width:'100%'}}>
              <div className={classes.clDiv}>
                <div>
                  Maintenance Request Management
                </div>
                <div style={{display:'flex'}}>
                  <div>
                    <Badge badgeContent={12} showZero 
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        
                      }} color='secondary'>
                      <BootstrapButton size='small' style={{borderRadius:'40px'}} disableRipple disableFocusRipple >
                        Request
                      </BootstrapButton>
                    </Badge>
                  </div>
                  <div>
                    <Badge>
                      <BootstrapButton size='small' style={{borderRadius:'40px'}}>
                        Review
                      </BootstrapButton>
                    </Badge>
                  </div>
                </div>
              </div>
            <Table className={classes.table} aria-label="simple table" size='small'>
                <TableHead>
               
                <TableRow>
                    <StyldTableCell align="left" colSpan={5} style={{border:'1px solid #b8b1b7'}}>Items</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Request initiator</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Request Type</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Initiated Date</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Review Status</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Action</StyldTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.items}>
                    <TableCell align='left' component="th" scope="row" colSpan={5} >
                        {row.items}
                    </TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.requestInitiator}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.RequestType} </TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.InitiatedDate}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.ReviewStatus}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.Action }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
    </Grid>

    </div>
  );    
}





  
