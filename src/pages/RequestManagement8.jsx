import React, { useEffect, useState } from 'react';
import dom from 'react-dom';
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
import StyledMenu from "../components/MenuButton";
import ActionButton from '../input/SplitButton'
import SearchInput from '../input/SearchInput'
import http from '../httpCommon.js'
import TechnicalReview24 from './../components/pages/TechnicalReview24'
import SelectInput from '../input/SelectInput'
import TextInput from '../input/TextInput'
import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LocationDetails from '../components/LocationDetails';
import SplitButton from '../input/SplitButton';
import CustomizedMenus from '../input/SplitsButton';
import SplitsButton from '../input/SplitsButton';


import ViewMemoForm from '../components/pages/ViewMemoForm';
import IoMdClose from 'react-icons/io';
import TechnicalReview16 from './TechnicalReview16';



const token1 = sessionStorage.getItem('token');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxIiwiRmlyc3ROYW1lIjoiRWRvIEdvdiIsIkxhc3ROYW1lIjoiQWRtaW4iLCJleHAiOjE2MTM0MDUwMzUsImlzcyI6InNlcnZlciIsImF1ZCI6ImNsaWVudCJ9.uBytGBfWejiG7x00iu80MoJRFbT5IGDjAJrv58zsMTE';
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 10px',
    fontWeight: 'bolder',
    lineHeight: 1,
    margin: '2px',
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

const StyleTableCell = withStyles({
  root: {
    fontSize: '11px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)


const StyldTableCell = withStyles({
  head: {
    backgroundColor: 'lightgrey',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: '12px'

  },

})(TableCell);

const useStyles = makeStyles({
  table: {
    width: '100%'

  },
  clDiv: {
    backgroundColor: '#d5ffd5',
    fontWeight: 'bolder',
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14'


  },

  tbCells: {
    maxWidth: '70px'

  },

  bootsButton: {
    borderRadius: '40px',

  }


});





function createData(items,RequestType, Cost, InitiatorsName, Agency, DateReceived, Action) {

  return { items, RequestType, Cost, InitiatorsName , Agency, DateReceived, Action };
}

const chkStatus = (status) => {
  if (status === 1)
    return { color: 'yellow', margin: '2px', fontSize: '12px' }
  else if (status === 2)
    return { color: 'red', margin: '2px', fontSize: '10px' }
  else
    return { color: 'green', margin: '2px', fontSize: '10px' }
}






export default function Tables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [isRequest, setIsRequest] = React.useState(true);
  const [isReview, setIsReview] = React.useState(false);
  const [isEntry, setIsEntry] = React.useState([]);
  let [error, setError] = React.useState(null)
  let [rows, setRow] = React.useState([])
  let [rowsReviewed, setReviewedRow] = React.useState([])
  let [isCount, setIsCount] = React.useState('')
  const [showFormModal, setShowFormModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState([]);
  let [requestID, setRequestID] = React.useState(null);
  let [showModal16, setShowModal16] = React.useState(false);
  let [show19, setShow19] = React.useState(false);


  var InitiatedRequest = 7786790;
  var CompletedRequest = 7786790;
  var status = 3;
  var officerName = "John Hancock"
  var officerPost = "HOS"
  var date = '08.08.08'
  var title = 'i can still recall our last summers'
  var post = 'officer 1'
  var ministry = 'ministry of Education'
  var numb = 78943
  var grade = 'Grade level 8'
  var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'

  const sendRequestId=(e)=>{
    const req = e.currentTarget.getAttribute('data-item')
    setRequestID(req);
    console.log(requestID);

  }
  const closeModal=()=>{
    setShowFormModal(false);
  }


  const handleAccept = () =>{
    setShowFormModal(true);
  }

  const handleCancel = () =>{
    
  }

  const goLink = () =>{
    setShowModal16(true);
  }

  const goLinkNot = () =>{
    setShowModal16(false);
  }

  const doShow19 = () =>{
    setShow19(true)
  }

  const unShow19 = () =>{
    setShow19(false);
  }





  const fetchData = async () => {
    let url = 'FinalApproval' // 'Director-ReviewedApprovals';

    console.log(url)
    http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setError(response.data.code)
        setRow(response.data.data)


        setIsCount((response.data.count).toString())



      })

  }
  useEffect(() => {
    fetchData()

  }, [])




  const fetchReviewedData = async () => {
    let url = 'FinalApprovalReview';

    console.log(url)
    http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        setError(response.data.code)
        setReviewedRow(response.data.data)




      })

  }
  useEffect(() => {
    fetchReviewedData()

  }, [])



  // http.get('http://devsvr.edogoverp.com/facility/api/facilityrequest/Director-PendingApprovals')
  // .then((response) => {
  //   console.log('server')
  //   console.log(response.data)
  //   setError(response.data.code)
  //   setRow(response.data.data)


  //     if (!response.ok) {
  //         console.log(`Did not get an ok. got: ${response.statusText}`);

  //     }


  // })





  //   async function axiosTest() {
  //     const response = await http.get('Director-PendingApprovals')
  //     return response.data
  // }



  const chkStatus = (status) => {
    if (status === 3)
      return { color: 'green', margin: '2px', fontSize: '14px' }
    else if (status === 2)
      return { color: 'red', margin: '2px', fontSize: '14px' }
    else
      return { color: 'yellow', margin: '2px', fontSize: '14px' }
  }

  const handleClick = (e) => {
    console.log(e);


  }

 


  
  




  const handleIsRequest = () => {

    isRequest = true;

    fetchData()
    setIsRequest(isRequest)
  }

  const handleIsReviewedRequest = () => {

    isRequest = false;
    fetchReviewedData()
    setIsRequest(isRequest)
  }

  const isGreen = { backgroundColor: 'light-green', borderRadius: '40px' }
  const isWhite = { backgroundColor: 'white', borderRadius: '40px' }

  if (isRequest) {
    return (
      <div style={{width:'100%'}}>
        <TechnicalReview24 show={showFormModal} handleClose={closeModal} />
        <TechnicalReview16 show16={showModal16} handleClose16={goLinkNot} />
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>

          <div>Good Morning</div>
          <div style={{ fontSize: '23px'}}>Osagie Osaigbovo; #{numb}</div>

          <div>{post} {ministry} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        
        <div style={{ marginLeft: '46%', marginBottom: '1%' }} className='row'>
          <div style={{ marginRight: '107px', width: '150px' }}><SplitButton /></div>
          <SearchInput className='col-sm-3' style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex' }} className='row'>
          <Grid container justify="center">
            <Grid item sm={11}>
              <TableContainer component={Paper} style={{ width: '100%' }}>
                <div className={classes.clDiv}>
                  <div style={{ fontWeight: '900', fontFamily: 'auto' }}>
                    Maintenance Request Management
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <Badge badgeContent={isCount} showZero
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',

                        }} color='error'>
                        <BootstrapButton size='small' disableRipple disableFocusRipple style={isRequest ? isWhite : isGreen}>
                          Request
                      </BootstrapButton>
                      </Badge>
                    </div>
                    <div>
                      <Badge>
                        <BootstrapButton size='small' style={{ borderRadius: '40px' }} onClick={handleIsReviewedRequest}>
                          Review
                      </BootstrapButton>
                      </Badge>
                    </div>
                  </div>
                </div>
                <Table className={classes.table} aria-label="simple table" size='small'>
                  <TableHead>

                    <TableRow>
                      <StyldTableCell align="left" style={{ border: '1px solid red' }}>Items</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request Type</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Cost</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Initiators Name</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Agency</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Date Received</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Action</StyldTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.requestId} data-item ={row.requestId} onClick={sendRequestId} >
                        <StyleTableCell style={{ fontSize: '10px' }} align="left" style={{ border: '1px solid lightgrey' }}><a href='#' onClick={goLink}>{row.items}</a></StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.requestType}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.cost} </StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.initiatorsName}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.agency}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.dateReceived}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{<SplitsButton handleAccept={handleAccept} handleCancel={handleCancel} />}</StyleTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </div>
      </div>
    );
  }
  else {
    return (
      <div style={{ width: '100%' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>

          <div>Good Morning</div>
          <div style={{ fontSize: '23px' }}>Osagie Osaigbovo; #{numb}</div>

          <div>{post} {ministry} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
      </div>
        <div style={{ marginLeft: '58%' }} className='row'>
          <div style={{ margin: '7px' }}><StyledMenu className='col-sm-6' /></div>
          <SearchInput className='col-sm-3' />
        </div>
        <div style={{ display: 'flex' }} className='row'>

          <Grid container sm={12} justify='center' alignItems='center'>
            <Grid item sm={11}>
              <TableContainer component={Paper} style={{ width: '100%' }}>
                <div className={classes.clDiv}>
                  <ViewMemoForm show={show19} handleClose={unShow19}/>
                  <div>
                    Maintenance Request Management
                </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <Badge badgeContent={isCount} showZero
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',

                        }} color='error'>
                        <BootstrapButton size='small' disableRipple disableFocusRipple style={{ borderRadius: '40px' }} onClick={handleIsRequest}>
                          Request
                      </BootstrapButton>
                      </Badge>
                    </div>
                    <div>
                      <Badge>
                        <BootstrapButton size='small' style={{ borderRadius: '40px' }} style={isRequest ? isGreen : isWhite}>
                          Review
                      </BootstrapButton>
                      </Badge>
                    </div>
                  </div>
                </div>

                <Table className={classes.table} aria-label="simple table" size='small'  >
                  <TableHead>

                    <TableRow>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Items</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request Type</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Cost</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Evaluation</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Officer's Name</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Review Status</StyldTableCell>
                      <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Action</StyldTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsReviewed.map((row1) => (
                      <TableRow key={row1.requestId} data-item ={row1.requestId} onClick={sendRequestId}>
                        <StyleTableCell align='left' component="th" scope="row"  ><a href='#' onClick={doShow19}>{row1.items}</a></StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row1.requestType}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row1.cost} </StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row1.initiatorsName}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row1.agency}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}>{row1.approvalType}</StyleTableCell>
                        <StyleTableCell align="left" style={{ border: '1px solid lightgrey' }}><row1.dateTreated /></StyleTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid> 
        </div>     
        </div >
    )

  }

}

