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
import MainMemo1 from '../components/MainMemo1';
import ViewMemoForm from '../components/pages/ViewMemoForm';



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
      component={ViewMemoForm}
    />
    <ProtectedRoute
      path="/admin-portal/employee-details"
      exact
      component={EmployeeDetails}
    />
    <ProtectedRoute
      path="/admin-portal/supervisor-organogram"
      exact
      component={SupervisorOrganogram}
    />
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
  </Switch>
));
