import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBaseRoute from './utils/RoleBaseRoute';
import AdminSummary from './components/dashboard/AdminSummary';
import DepartmentList from './components/department/DepartmentList';
import AddDepartment from './components/department/AddDepartment';

function App() {
  

  return (
    <>
    <ToastContainer />
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to = "/admin-dashboard"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBaseRoute requiredRole={["admin"]}>
               <AdminDashboard/>
            </RoleBaseRoute>
          </PrivateRoutes>
         }>
          <Route index element={<AdminSummary/>}></Route>
           <Route path="/admin-dashboard/departments" element={<DepartmentList/>}></Route>
            <Route path="/admin-dashboard/add-department" element={<AddDepartment/>}></Route>

         </Route>
        <Route path='/employee-dashboard' element={<EmployeeDashboard/>}></Route>
      </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App
