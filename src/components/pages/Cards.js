import { Divider, Grid, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import emblem from './images/Emblem.jpg'
import React from 'react';
import histo from './images/histo.png'

const useStyles = makeStyles({
   root:{
       display:'flex',
       flexDirection:'column',
       
},
myCont:{
    width:'300px',
    backgroundColor:'white',
    margin:'8px',
    borderRadius:'3px'
},
count: {
    fontWeight:'700',
    fontSize:'xx-large'

},
secCard:{
    display:'flex',
    width:'400px',
    backgroundColor:"white",
    flexDirection:'column',
    borderRadius:'3px',
    margin: '8px'

},
inlines:{
    display:'flex',
    justifyContent:'space-between',
    padding:'16px',
    fontSize:'small',
},
iner:{
    display:'flex',
    justifyContent:'space-between',
    padding:'14px'
}
    
});


const Cards = () => {
    const classes = useStyles();
    return (
        <div>
            

            

        <div style={{display:'flex'}}>
            <div className={classes.root}>
                <div style={{display:'flex'}}>
                    <div>
                         <div className={classes.myCont} >
                <div className={classes.root} >
                    <div className={classes.iner}>
                        <div style={{fontSize:"small"}}>Generated Memo</div>
                    </div>
                    <div className={classes.iner}>
                        <div className={classes.count}>446</div>
                        <div style={{alignSelf:'flex-end'}}> <img src={histo} alt='histo' height='30' width='100' /> </div>
                    </div>
                    

                </div>
            </div>
                </div>
                    <div> <div className={classes.myCont} >
                <div className={classes.root} >
                    <div className={classes.iner}>
                        <div style={{fontSize:"small"}}>Generated Memo</div>
                    </div>
                    <div className={classes.iner}>
                        <div className={classes.count}>446</div>
                        <div style={{alignSelf:'flex-end'}}> <img src={histo} alt='histo' height='30' width='100' /> </div>
                    </div>
                    

                </div>
            </div></div>
                </div>
                <div style={{display:'flex'}}>
                    <div> <div className={classes.myCont} >
                <div className={classes.root} >
                    <div className={classes.iner}>
                        <div style={{fontSize:"small"}}>Generated Memo</div>
                    </div>
                    <div className={classes.iner}>
                        <div className={classes.count}>446</div>
                        <div style={{alignSelf:'flex-end'}}> <img src={histo} alt='histo' height='30' width='100' /> </div>
                    </div>
                    

                </div>
            </div></div>
                    <div> <div className={classes.myCont} >
                <div className={classes.root} >
                    <div className={classes.iner}>
                        <div style={{fontSize:"small"}}>Generated Memo</div>
                    </div>
                    <div className={classes.iner}>
                        <div className={classes.count}>446</div>
                        <div style={{alignSelf:'flex-end'}}> <img src={histo} alt='histo' height='30' width='100' /> </div>
                    </div>
                </div>
            </div></div>
                </div>
            </div>

            <div>
            <div className={classes.secCard}>
                <div className={classes.inlines}>
                    <div>Request in transit (initiated)</div>
                    <div>2453</div>
                </div>
                <Divider variant='middle' />
                <div className={classes.inlines}>
                    <div>Request at review stage</div>
                    <div>1049</div>
                </div>
                <Divider variant='middle' />
                <div className={classes.inlines}>
                    <div>Request at approval stage</div>
                    <div>834</div>
                </div>
                <Divider variant='middle' />
                <div className={classes.inlines}>
                    <div>Request at returnned for rework</div>
                    <div>137</div>
                </div>
                <Divider variant='middle' />
                <div className={classes.inlines}>
                    <div>Treated and completed request</div>
                    <div>32</div>
                </div>
               
            </div>
            </div>
        </div>
        </div>
    );
};

export default Cards;