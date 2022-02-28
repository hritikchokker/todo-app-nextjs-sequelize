import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/header';
import Loader from '../../components/loader';
import UserDetails from './pages/user/userDetails';
import UserList from './pages/user/userList';

const TodoList = React.lazy(() => import('./pages/todo/todoList'));
const TodoDetails = React.lazy(() => import('./pages/todo/todoDetails'));
const AddTodo = React.lazy(() => import('./pages/todo/AddTodo'));
const EditTodo = React.lazy(() => import('./pages/todo/EditTodo'));
function DashboardRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <TodoList />
            </React.Suspense>
          }
        />
        <Route
          path="/add"
          element={
            <React.Suspense fallback={<Loader />}>
              {/* PrivateRoute For Edit */}
              <AddTodo />
              {/* PrivateRoute For Edit */}
            </React.Suspense>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <EditTodo />
            </React.Suspense>
          }
        />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route
          path="/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <TodoDetails />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default DashboardRoutes;
