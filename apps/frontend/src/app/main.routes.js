import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Loader from './components/loader';
import PrivateRoute from './utils/auth/privateRoute';
import PublicRoute from './utils/auth/publicRoute';

const Login = React.lazy(() => import('./views/login'));
const Register = React.lazy(() => import('./views/register'));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Login />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Register />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* <Route path="*" render={<h1>Not Found</h1>} /> */}
    </Routes>
  );
}

export default AppRoutes;
