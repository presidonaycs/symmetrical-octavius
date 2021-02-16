import React from 'react'

export default function CreateTable(props) {

    function createData(items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action) {
  
        return { items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action };
      }



    return ( 
        <div >
          <div style={{ marginLeft: '52.2%' }} className='row'>
            <div style={{ margin: '7px' }}><StyledMenu className='col-sm-6' /></div>
            <SearchInput className='col-sm-3' />
          </div>
          <div style={{ display: 'flex' }} className='row'>

            <Grid container >
              <Grid item sm={12}>
                <TableContainer component={Paper} style={{ width: '100%' }}>
                  <div className={classes.clDiv}>
                    <div>
                      Maintenance Request Management
                </div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Badge badgeContent={12} showZero
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',

                          }} color='secondary'>
                          <BootstrapButton size='small' disableRipple disableFocusRipple style={isRequest ? isWhite : isGreen}>
                            Request
                      </BootstrapButton>
                        </Badge>
                      </div>
                      <div>
                        <Badge>
                          <BootstrapButton size='small' style={{ borderRadius: '40px' }} onClick={handleIsRequest}>
                            Review
                      </BootstrapButton>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Table className={classes.table} aria-label="simple table" size='small'>
                    <TableHead>

                      <TableRow>
                        <StyldTableCell align="left" colSpan={5} style={{ border: '1px solid #b8b1b7' }}>Items</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request initiator</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request Type</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Initiated Date</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Review Status</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Action</StyldTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.map((row) => (
                        <TableRow key={props.items}>
                          <TableCell align='left' component="th" scope="row" colSpan={5} >
                            {row.items}
                          </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{props.requestInitiator}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{props.requestType} </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{props.initiatedDate}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{props.reviewStatus}</TableCell>
                         
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </div>
  
        </div>
    );
}
