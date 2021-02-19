import React, { useEffect, useState } from 'react';
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon, Container } from '@material-ui/core';

import Request from './../components/MainMemo';
import MemoSide from './MemoSide';
import LocationDetails from './layouts/LocationDetails';

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

const RequestForm = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'EDSG - Employee Details';
    }, []);

    return (
        < Grid Container>
            <div className='col'>
                <div className='row flex space-between' style={{ marginBottom: '16px' }}>
                    <div>
                        <div>Good Morning</div>
                        <div style={{ fontSize: '23px' }}>Osagie Osaigbovo; #{numb}</div>

                        <div>{post} {ministry} | {grade}</div>
                    </div>
                    <div>
                        <LocationDetails />
                    </div>

                </div>
                <Grid container>
                    <Grid item lg  style={{ marginBottom:'1vw' }}>
                        <div style={{ fontWeight: 'bold', fontFamily: 'auto' , paddingBottom:'1vw' }}>Facility Request Management</div>
                        
                            <MemoSide />
                       
                    </Grid>

                    <Grid item lg style={{ marginTop:'1vw' }} >
                        <Request />
                    </Grid>
                </Grid>
            </div>


        </ Grid>
    );
};

export default RequestForm