import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import NotFoundView from 'src/views/errors/NotFoundView';
import SettingsView from 'src/views/settings/SettingsView';
import DashboardView from 'src/views/dashboard/DashboardView';
import CreateMeetingView from 'src/views/create/CreateMeetingView';
import CurrentMeetingView from 'src/views/current/CurrentMeetingView';
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import EmailView from './views/email/EmailView/Email';
const routes = [
  {
    path: 'register',
    element: <RegisterView />,
  },
  {
    path: '',
    element: <LoginView />,
    children: [
      { path: 'login', element: <DashboardView /> }
    ]
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'current', element: <CurrentMeetingView /> },
      { path: 'create', element: <CreateMeetingView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'email', element: <EmailView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
