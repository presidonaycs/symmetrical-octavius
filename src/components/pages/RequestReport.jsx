import React, { useState } from 'react';
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon, Container } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { ReactComponent as Logo } from "./../iconComponent/upload.svg"
import LensIcon from '@material-ui/icons/Lens';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { TextareaAutosize } from '@material-ui/core';
import imaee from './../../images/WIN_20190309_20_47_24_Pro.jpg'
import imaef from './../../images/WIN_20190309_20_48_16_Pro.jpg'
import imaeg from './../../images/WIN_20190309_20_48_22_Pro.jpg'



const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: 11,
    padding: '2px 12px',
    width: '220px',
    lineHeight: 1,
    margin: '20px',
    backgroundColor: 'yellow',
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
      backgroundColor: 'yellow',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
    },

  },
})(Button);

const BooButton = withStyles({
  root: {
    color:'white',
    boxShadow: 'none',
    textTransform: 'none',
    width:'80px',
    fontSize: 9,
    padding: '2px 11px',
    margin:'20px 5px 0px 5px',
    lineHeight: 3,
    borderRadius: 0,
    backgroundColor: 'green',
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
      backgroundColor: 'darkgreen',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      
    },

  },
})(Button);

const TextArea = withStyles({
  root: {
    width: '150px',
    height: '200px'
  },
  body: {
    minWidth: '150px',
    height: '200px'
  }
})(TextField)


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  myDivs: {
    fontSize: '12px',
    padding: '6px',
    fontFamily: 'auto'


  },
  root: {
    display: 'flex',
    maxWidth: '460px',
    flexWrap: 'wrap',
    borderRadius: '4px'
  },
  costBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },

  innerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    padding: '6px',
    width: '226px',
    borderRadius: '3px',
    fontFamily: 'auto'

  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));


const RequestReport = () => {
  const classes = useStyles();

  const [requestType, setRequestType] = React.useState('');

  const handleChange = (event) => {
    setRequestType(event.target.value);
  };

       var List = [{ fileName: "Picture of Directors office AC", filePath: imaee },
      { fileName: "Picture of reception/Waiting area", filePath: imaef },
      { fileName: "Picture of Francis and Nieces", filePath: imaeg }
      ];

  const initiationDate = 'January 19, 2020';
  const initiator = 'Osagie Osaigbovo';
  const viewMemo = 'August 1, 2019';
  const cost = '0.00';
  const status = {};
  const approval = [];
  const position = {};
  const LastDate = 'Wednesday August 12 2020';
  const [upload, setUpload] = useState(null);
  const [images, setImages] = useState(List)

  

var handleOnUpload = event =>{
  setUpload(event.target.files[0])
  List.push({fileName:upload.name, filePath:upload.size})
} 
console.log(upload)




  return (


    <Grid container style={{ display: 'flex' }} alignItems='center' justify='center'  >

      <Grid item sm={7} >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div >
            <Paper style={{ marginTop: '147px' }, { padding: '20px' }}>
              <div style={{ width: '100%' }}>
                <TextField
                  id="outlined-details-static"
                  label="Subject:"
                  multiline
                  InputProps={{ disableUnderline: true }}
                  rows={2}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
                  fullWidth


                />
              </div>
              <Divider />

              <div>
                <TextField
                  id="outlined-details-stati"
                  label="Details:"
                  multiline
                  cols={190}
                  rows={20}
                  style={{ width: '100%' }, { backgroundColor: 'white' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ disableUnderline: true }}
                  fullWidth

                />
              </div>
                          Last Maintenance Date: {LastDate}
              <Divider />

              <Container style={{ margin: '16px 0px 16px 0px' }}>
                {upload.map((item) => (
                  <div style={{ margin: '16px 0px 16px 0px' }}>
                    <div>{item.fileName}</div>
                    <div><img src={item.filePath} alt="John" style={{ width: '100%' }}></img></div>
                  </div>
                ))}
              </Container>

            </Paper>

          </div>

        </div>
        <div style={{ backgroundColor: 'lightgreen', padding: '12px', fontWeight: 'bold', fontFamily: 'auto' }}>
          Add notes
        </div>
        <Paper>
        <TextField
          id="outlined-details-stati"
          multiline
          cols={30}
          rows={10}
          style={{ width: '100%', fontSize: '5px' }, { backgroundColor: 'white', padding: '12px' }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ disableUnderline: true }}
          fullWidth

        />
        <Divider variant='middle' />
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
          <BootstrapButton
            type='file'
            variant='contained'
            component='label'
            startIcon={<SvgIcon style={{ marginTop: '9px' }}>
              <Logo />
            </SvgIcon>}
          >
            Upload Supporting Documents
              <input type='file' accept="image/*" hidden onChange={handleOnUpload}></input>
          </BootstrapButton>
          </div>
          <div>
          <BooButton >Submit</BooButton>
          <BooButton style={{backgroundColor:'grey'}}>Clear Entry</BooButton>
          <BooButton style={{backgroundColor:'silver', color:'black'}}>Close</BooButton>
          </div>
        </div>
        </Paper>
      </Grid>
    </Grid>

  );
};

export default RequestReport;
