import React from 'react';
import { Switch, Route } from 'react-router';
import { pure } from 'recompose';

import ProtectedRoute from './ProtectedRoute';

import Dashboard from '../components/pages/Dashboard';
import MdaSetup from '../components/pages/MdaSetup';
import RolesSetup from '../components/pages/RolesSetup';
import EmployeeProfile from '../components/pages/EmployeeProfile';
import EmployeeDetails from '../components/pages/EmployeeDetails';
import SupervisorOrganogram from '../components/pages/SupervisorOrganogram';
import RequestMaintenance from '../pages/RequestMaintenance';
import ReviewRequest from '../pages/MaintenanceRequestManagement';
import Dashboard1 from '../components/Dashboard1';
import Request from '../components/RequestForm';
import Mainmemo from '../components/MainMemo';
import RequestForm from '../components/RequestForm';
import RequestReport from '../components/pages/RequestReport'
import MainMemo1 from '../components/MainMemo1';
import ViewMemoForm from '../components/pages/ViewMemoForm';
import FacilitySettings6 from '../components/pages/FacilitySettings6';
import TechnicalReviewModal21 from '../components/pages/TechnicalReviewModal21';
import TechnicalReview24 from '../components/pages/TechnicalReview24';
import Page10 from '../components/pages/Page10';
import Test from '../pages/Test'
import FacMaintenance7 from '../components/pages/FacMaintenance7';
import TimeOut from '../components/pages/TimeOut';
import DirectorsView16 from '../pages/DirectorsView16';
import RequestManagement8 from './../pages/RequestManagement8'
import Page14 from '../components/Page14'



export default pure(() => (
  <Switch>
    <ProtectedRoute
      path="/facility-portal/"
      exact
      component={Dashboard1}
    />  
    <ProtectedRoute
      path="/facility-portal/request-maintainance"
      exact
    //  component={RequestMaintenance}
    component={RequestForm}
    />
    <ProtectedRoute
      path="/facility-portal/review-request"
      exact
      component={ReviewRequest}
    />
    <ProtectedRoute
      path="/facility-portal/manage-request"
      exact
      component={RequestManagement8}

    />
    <ProtectedRoute
       path="/facility-portal/request-report"
       exact
       component={DirectorsView16}
    />
    <ProtectedRoute
      path="/facility-portal/facility-settings"
      exact
      component={Page14}
    />
    <ProtectedRoute
      path="/facility-portal/facility-pop-menu"
      exact
      component={RequestManagement8}
    />

<ProtectedRoute
      path="/facility-portal/view-memo-form"
      exact
      component={ViewMemoForm}
    />


    
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
  </Switch>
));
