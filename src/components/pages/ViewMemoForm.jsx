import React, { useEffect, useState } from 'react';
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon, Container } from '@material-ui/core';
import { IoMdClose } from 'react-icons/io';
import Request from './../MainMemo1'
import MemoSide from './../MemoSide'

import http from './../../httpCommon'
import ApprovalJourney from '../ApprovalJourney';

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
var approvalJourney = [];








const ViewMemoForm = (props) => {

  const [selectedRecord, setSelectedRecord] = useState([]);
  const [details, setDetails] = useState([]);
  let [error, setError] = React.useState(null)
  let [rows1, setRow1] = React.useState([])
  let [docs, setDocs] = React.useState([])

  const fetchDatas = async () => {
    let url = 'View-Memo-Details' // 'Director-ReviewedApprovals';
    console.log('hey')
    console.log(url)
    http.get(url, {
      params: {
        requestId: 1
      }
    })
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setError(response.data.code)
        setRow1(response.data.data)
        setDocs(response.data.data.uploadedDocuments)






      })

  }
  useEffect(() => {
    fetchDatas()

  }, [])


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Roles Setup';


  }, []);

  // const closeMemoModal = () => {
  //   setSelectedRecord([]);
  //   showMemoModal = false
  //   console.log('clicked')
  // };



  // fetchDatas()


  if (props.show) {


    return (




      <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
        <div className="modal-box" style={{ width: '80vw', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="content">
            <div className='col'>
              <div className='row' style={{ marginBottom: '16px' }}>



              </div>
              <div className='row'>
                <div className='col' >
                  <div style={{ fontWeight: 'bold', fontFamily: 'auto' }}>Facility Request Management</div>
                  <div className='col col-lg-2' style={{ width: '300px', height: 'auto' }}>
                    <MemoSide rows1={rows1} />
                  </div>
                </div>

                <div className='col col-lg-10' style={{ width: '680px', marginLeft: '0.3vw' }} >
                  <Request rows1={rows1} docs={docs} />
                </div>
              </div>
            </div>
            <div>
              {approvalJourney.map((item) => (
                <ApprovalJourney image={''} name={''} post={''} location={''} ministry={''} date={''} lastModified={''} comment={''} />
              ))}
            </div>
          </div>
        </div>

      </div>


    )
  }


  else {
    return (
      <div></div>
    )
  }


};

export default ViewMemoForm;
