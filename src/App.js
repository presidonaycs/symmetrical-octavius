import React from 'react';
<<<<<<< HEAD
import DeletableTable from './DeletableTable';
import logo from './logo.svg';
import './App.css';
import RequestMaintenance from './pages/RequestMaintenance';
import Check from './Check';
import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
import Header1 from './components/Header1';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ReactNotifications from 'react-notifications-component';

import Homepage from './components/home';
import ProtectedRoute from './routes/ProtectedRoute';
import UserPortal from './components/UserPortal';

import './App.css';







>>>>>>> 584d93c5013d868f6c3a6de5c5eaf1066290f14d



function App() {

const history = createBrowserHistory();
return (
  <Router history={history}>
    <div>
<<<<<<< HEAD
      <DeletableTable />
=======
      <ReactNotifications />
      <Switch>
        <Route path="/" exact component={Homepage} />

        <ProtectedRoute path="/facility-portal/" component={UserPortal} />
        <Route render={() => <h1>Error 404. Page not found.</h1>} />
      </Switch>
>>>>>>> 584d93c5013d868f6c3a6de5c5eaf1066290f14d
    </div>
  </Router>
);
}


export default App;
