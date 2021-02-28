// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function ApprovalJourney(prop) {
    const Array = [
        {
            name:"Ehigiamouse Emmanuel, DOAS",
            time:"2 months",
            Picture:<img src=".\logo512.png" width="20" height="20" style={{border:"2px solid red"}} />,
            title:"",
            statusFInish:"finish",
            statusProcess:"process",
            statusWait:"wait"
        }
    ]
    const { Step } = Steps;

  return (

    <div>
  <div className="steps">
  <Steps direction="vertical" current={3}>
    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={Array[0].picture} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
    <Step status="finish" title="Verification" icon={<img src=".\logo512.png" width="20" height="20" style={{border:"2px solid red"}} />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>
  </div>
    </div>
  );
}

export default ApprovalJourney;
