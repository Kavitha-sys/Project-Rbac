import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Route, Routes } from 'react-router-dom'
import AdminPanel from './pages/AdminPanel';
import Dashboard from './pages/Dashboard';
import UserInfo from './pages/Userinfo';
import Users from './pages/Users';
import Login from './pages/Login';
import { UserProvider } from './contexts/UserContext';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <>
    <UserProvider>{/*wrap the application in the UserProvider to provide user context */}
    <Header />
<Routes>
  {/* public route for login */}
  <Route path='/' element={<Login />} />

  {/* Private route for dashboard accessible to ADMIN and user Roles */}
  <Route 
  path="dashboard"
  element={
  <PrivateRoute allowedRoles={['ADMIN', 'USER']} > 
  <Dashboard /> 
   </PrivateRoute> } 

  />
{/* Private route for admin panel accessible to ADMIN roles only */}

<Route 
  path="admin"
  element={
  <PrivateRoute allowedRoles={["ADMIN"]} > 
  <AdminPanel /> 
   </PrivateRoute> } 

  />
   
   {/* Private route for users accessible to ADMIN roles only */}

<Route 
  path="users"
  element={
  <PrivateRoute allowedRoles={["ADMIN"]} > 
  <Users /> 
   </PrivateRoute>
    } 

  />

  {/*this route accessible to USER role only */}

  <Route 
  path="user-info"
  element={
  <PrivateRoute allowedRoles={["USER"]} > 
  <UserInfo /> 
   </PrivateRoute> 
   } 
  />
</Routes>
</UserProvider>
    </>
  );
}

export default App;
