import React from 'react'
import LensIcon from '@material-ui/icons/Lens';
import { Divider, makeStyles } from '@material-ui/core';

export default function SubmittedRequest(props) {
 const useStyles = makeStyles({
     root:{
         
     }
 })



    var col = '';
    var message = '';
    
   

    
        if(props.status === 1){
            col = "yellow"
            message = "currently with"
    }
            
        else if(props.status === 2){
             col = "red"
             message = "Rejected by"
            }
           
        else{ 
            col = "green"
            message = "Approved"
        }
    


    return (
        <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'white', alignItems:'center', margin:"13px 0 13px 0", minHeight:'54px'}}>
            <div style={{ width:'600px',display:'flex', wordBreak:'break-word', fontSize:'15px', marginLeft:'16px'} }>
                {props.title}
            </div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <div style={{marginRight:"24px"}}>
                    <span><LensIcon style={{color:col, fontSize:'14px'}}/></span> {message} <span style={{fontWeight:'bolder'}}>{props.officerName}</span> ({props.officerPost})
                </div>
                <Divider orientation='vertical' flexItem style={{marginLeft:"15"}}/>
                <div >
                    <span style={{fontWeight:'bolder', marginLeft:'13px'}}>Last treated:  {props.date}</span>
                </div>
            </div>
        </div>
    )
}
