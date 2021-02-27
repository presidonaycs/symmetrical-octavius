import { TableCell, withStyles,TableContainer,Table,TableBody,TableRow, TableHead } from '@material-ui/core';
import React from 'react'

const StyleTableCell = withStyles({
  root: {
    fontSize: '11px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)

const ApprovalJourney = (props) => {

  const avatar = props.image;
  const name = props.name;
  const post = props.post;
  const location = props.location;
  const ministry = props.ministry;
  const date = props.date;
  const lastModified = props.lastModified;
  const comment = props.comment;
  

const officer = 
  <div style={{display:'flex'}}>
    <div style={{borderRadius:'50%', width:'100%', height:'100%'}}>
      <img src={avatar}></img>
    </div>

    <div style={{display:'flex', flexDirection:'column'}}>
      <div>{name}</div>
      <div>{post}</div>
      <div>{ministry}</div>
    </div >
  </div>;

const inTray = 
<div>
  <div>
    {date}
  </div>
  <div>
    {lastModified}
  </div>
  <div>
    {location}
  </div>
</div>

const outTray= 
<div>
  <div>
    {date}
  </div>
  <div>
    {lastModified}
  </div>
  <div>
    {location}
  </div>
</div>

return(
  <TableContainer >
    <Table>  
      <TableBody>      
      
        <TableRow>
          <StyleTableCell align="left">{officer}</StyleTableCell>
          <StyleTableCell align="left">{inTray}</StyleTableCell>
          <StyleTableCell align="left">{outTray}</StyleTableCell>
          <StyleTableCell align="left">{comment}</StyleTableCell>
        </TableRow>
        
      </TableBody>        
      
    </Table>
  </TableContainer>
)

}

export default ApprovalJourney;
