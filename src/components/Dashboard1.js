import { Divider, Grid, Paper } from '@material-ui/core'
import React from 'react'
import LocationDetails from './layouts/LocationDetails';
import SavedRequest from './SavedRequest';
import SubmittedRequest from './SubmittedRequest';




export default function Dashboard1() {
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
                    <span style={{fontWeight:'900', fontFamily:'auto'}}>Issued maintenance requests</span>
                    <Paper style={{backgroundColor:'white', height:'250px', width:'330px'}}>
                        
                    </Paper>
                </Grid>
                <Grid item sm={3} style={{marginLeft:'80px'}}>
                <span style={{fontWeight:'900', fontFamily:'auto'}}>Approved Requests</span>
                    <Paper style={{backgroundColor:'white',height:'250px', width:'330px'}}>

                    </Paper>
                </Grid>
                <Grid item container sm={3}  style={{marginLeft:'120px'}}>
                    <Grid item sm={12} style={{margin:'0px', height: '100px'}}>
                        <Paper style={{backgroundColor:'white'}}>
                            <div style={{fontWeight:'bolder', padding:'4px', fontFamily:'auto'}}>
                                Initiated Request
                            </div>
                            <Divider/>
                            <div style={{fontWeight:'bolder', fontSize:'2em', padding:'8px'}}>
                                {InitiatedRequest}
                            </div>
                            
                        </Paper>
                    </Grid>
                    <Grid item sm={12} style={{margin:'0px', height:'100px'}}>
                        <Paper style={{backgroundColor:'white'}}>
                        <div style={{fontWeight:'bolder', padding:'14px', fontFamily:'auto'}}>
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

            <Grid style={{fontFamily:'auto'}}>
                <Paper> <SavedRequest title={descriptions}/> </Paper>
                <Paper>  <SubmittedRequest status={status} officerName={officerName} officerPost={officerPost} date={date} title={title}/> </Paper>            </Grid>
        </div>
        </div>
    )
}
