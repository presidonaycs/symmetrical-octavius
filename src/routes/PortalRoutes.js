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



export default pure(() => (
  <Switch>
    <ProtectedRoute
      path="/facility-portal/"
      exact
      component={Dashboard}
    />
    <ProtectedRoute
      path="/facility-portal/request-maintainance"
      exact
      component={RequestMaintenance}
    />
    <ProtectedRoute
      path="/facility-portal/review-request"
      exact
      component={ReviewRequest}
    />
    <ProtectedRoute
      path="/admin-portal/employee-profile"
      exact
      component={EmployeeProfile}
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
