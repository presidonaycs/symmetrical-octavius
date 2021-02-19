/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';


export default [
  
  { title: 'Dashboard', href: '/facility-portal', icon: <BiEnvelope className="icon" /> },
  { title: 'Request Maintainance', href: '/facility-portal/request-maintainance', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Review Request', href: '/facility-portal/review-request', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Manage Request', href: '/facility-portal/manage-request', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Settings', href: '/facility-portal/request-report', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Report', href: '/facility-portal/report', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Log Out', href: '/facility-portal/logout', icon: <RiUserSettingsLine className="icon" /> }

  
  // {
//     title: 'Staff Onboarding',
//     href: '',
//     icon: <HiOutlineUserAdd className="icon" />,
//     children: [
//       { title: 'Create Profile', href: '/admin-portal/employee-profile', icon: 'CP' },
//       { title: 'Employee Details', href: '/admin-portal/employee-details', icon: 'ED' }
//     ]
//   },
//   { title: 'Supervisor Organogram', href: '/admin-portal/supervisor-organogram', icon: <CgUserList className="icon" /> }
 ];
