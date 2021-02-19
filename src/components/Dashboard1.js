import { Divider, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import httpCommon from '../httpCommon';
import SplitsButton from '../input/SplitsButton';
import React, { useEffect } from 'react'
import http from '../httpCommon';
import LocationDetails from './layouts/LocationDetails';
import SavedRequest from './SavedRequest';
import SubmittedRequest from './SubmittedRequest';




export default function Dashboard1() {

  const [dashBoardRequest, setDashBoard] = useState([])
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
    var isSubmittedList=[]
    var isSavedList = []


    
    


    const fetchReviewedData = async () => {
      let url = 'dashboard-request';

    httpCommon.get(url)
    .then((response) => {
      console.log('server')
      console.log(response.data.data)
      
      setDashBoard(response.data)
      



    })

}
useEffect(() => {
  fetchReviewedData()

}, [])

   



    


   
    

    return (
        <div style={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <div>Good Morning</div>
                    <div style={{fontSize:'23px'}}>Osagie Osaigbovo; #{numb}</div>
                    
                    <div>{post} {ministry} | {grade}</div>
                </div>
                <div>
                    <LocationDetails />
                </div>
            </div>
        <div style={{marginTop:'20px'}}>
            <Grid container sm={12} style={{marginBottom:'24px'}}>
                <Grid item sm={3}>
                    <span style={{fontWeight:'900', fontFamily:'auto', marginBottom:'30px'}}>Issued maintenance requests</span>
                   <div style={{fontWeight:'900', fontFamily:'auto', marginTop:'3px'}}></div>

                    <Paper style={{backgroundColor:'white', height:'300px', width:'350px'}}>
                        
                    </Paper>
                </Grid>
                <Grid item sm={3} style={{marginLeft:'90px'}}>
                <span style={{fontWeight:'900', fontFamily:'auto'}}>Approved Requests</span>
                <div style={{fontWeight:'900', fontFamily:'auto', marginTop:'3px'}}></div>
                    <Paper style={{backgroundColor:'white',height:'300px', width:'350px', padding:'4px'}}>

                    </Paper>
                </Grid>
                <Grid item container sm={3}  style={{marginLeft:'120px'}}>
                    <Grid item sm={12} style={{marginTop:'8px', padding:'12px'}}>
                        <Paper style={{backgroundColor:'white', height:'140px', width:'300px'}}>
                            <div style={{fontWeight:'bolder', padding:'10px', fontFamily:'auto',marginTop:'3px'}}>
                                Initiated Request
                            </div>
                            <Divider/>
                            <div style={{fontWeight:'bolder', fontSize:'2em', padding:'8px'}}>
                                {InitiatedRequest}
                            </div>
                            
                        </Paper>
                    </Grid>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Grid item sm={12} style={{marginTop:'-6px', padding:'12px'}}>
                        <Paper style={{backgroundColor:'white', height:'138px', width:'300px'}}>
                        <div style={{fontWeight:'bolder', padding:'10px', fontFamily:'auto',marginTop:'3px'}}>
                                Completed Request
                            </div>
                            <Divider/>
                            <div style={{fontWeight:'bolder', fontSize:'2em', padding:'8px'}}>
                                {CompletedRequest}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

          

    
          
            <SubmittedRequest status={status} officerName={officerName} officerPost={officerPost} date={date} title={title}/>          
            <SubmittedRequest status={status} officerName={officerName} officerPost={officerPost} date={date} title={title}/>          
            <SubmittedRequest status={status} officerName={officerName} officerPost={officerPost} date={date} title={title}/>          
            <SubmittedRequest status={status} officerName={officerName} officerPost={officerPost} date={date} title={title}/>          


        </div>
        </div>
    )
}
