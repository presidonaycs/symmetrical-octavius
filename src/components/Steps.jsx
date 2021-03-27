// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Stepz(prop) {
    const Array = [
        {
           
            time:"2 months",
            subtitle:"DOAS",
            Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
            title:"Ehigiamouse Emmanuel,",
            descriptiom:"This is not a description. This is a description."
            // statusFInish:"finish",
            // statusProcess:"process",
            // statusWait:"wait"
        },
        {
           
          time:"3 months",
          subtitle:"DOAS",
          Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
          title:"Ehigiamouse Emmanuel,",
          descriptiom:"This is not a description. This is a description."
          // statusFInish:"finish",
          // statusProcess:"process",
          // statusWait:"wait"
      },
      {
           
        time:"4 months",
        subtitle:"DOAS",
        Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
        title:"Ehigiamouse Emmanuel,",
        descriptiom:"This is not a description. This is a description."
        // statusFInish:"finish",
        // statusProcess:"process",
        // statusWait:"wait"
    },
    {
           
      time:"5 months",
      subtitle:"DOAS",
      Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
      title:"Ehigiamouse Emmanuel,",
      descriptiom:"This is not a description. This is a description."
      // statusFInish:"finish",
      // statusProcess:"process",
      // statusWait:"wait"
  },
  {
           
    time:"6 months",
    subtitle:"DOAS",
    Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
    title:"Ehigiamouse Emmanuel,",
    descriptiom:"This is not a description. This is a description."
    // statusFInish:"finish",
    // statusProcess:"process",
    // statusWait:"wait"
},
{
           
  time:"7 months",
  subtitle:"DOAS",
  Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
  title:"Ehigiamouse Emmanuel,",
  descriptiom:"This is not a description. This is a description."
  // statusFInish:"finish",
  // statusProcess:"process",
  // statusWait:"wait"
},
{
           
  time:"8 months",
  subtitle:"DOAS",
  Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
  title:"Ehigiamouse Emmanuel,",
  descriptiom:"This is not a description. This is a description."
  // statusFInish:"finish",
  // statusProcess:"process",
  // statusWait:"wait"
},
        
    ]
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (

    <div style={{backgroundColor:'white'}}>
  <div className="steps">
 
    <Divider />

    <Steps  current={current} direction="vertical">
      <Step title={'James John'} subTitle= {Array[1].subtitle} description={Array[1].time} icon={Array[1].Picture}/>
      <Step title={'Harrison Ford'} subTitle= {Array[2].subtitle} description={Array[2].time} icon={Array[2].Picture}/>
      <Step title={'Jolly Fuss'} subTitle= {Array[3].subtitle} description={Array[3].time} icon={Array[3].Picture}/>
      <Step title={'Spade David'} subTitle= {Array[4].subtitle} description={Array[4].time} icon={Array[4].Picture}/>
      <Step title={'Godwin Obaseki'} subTitle= {Array[5].subtitle} description={Array[5].time} icon={Array[5].Picture}/>
      </Steps>
 
  </div>

    </div>
  );
}

export default Stepz;
