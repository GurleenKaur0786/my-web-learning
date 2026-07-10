import React from 'react'
import SummaryCards from './SummaryCards'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBill, FaRegTimesCircle, FaUser } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className='p-6'>
        
        <div className='flex items-center justify-center'> <h3 className='text-2xl font-bold '>Admin Dashboard Analytics</h3></div>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                <SummaryCards icon={<FaUser/>} text={"Total Employee"} number={4} color="bg-blue-500"/>
                 <SummaryCards icon={<FaBuilding/>} text={"Total Departments"} number={2} color="bg-gray-500"/>
                 <SummaryCards icon={<FaMoneyBill/>} text={"Monthly Salary"} number='$2500' color="bg-green-600"/>
            </div>

            <div className='mt-12'>
                <div className='flex items-center justify-center'> <h3 className='text-2xl font-bold '>Employee Leave Details</h3></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
                <SummaryCards icon={<FaFileAlt/>} text={"Leave Applied"} number={10} color="bg-yellow-500"/>
                 <SummaryCards icon={<FaCheckCircle/>} text={"Leave Approved"} number={2} color="bg-teal-500"/>
                 <SummaryCards icon={<FaHourglassHalf/>} text={"Leave Pending"} number={4} color="bg-pink-600"/>
                  <SummaryCards icon={<FaRegTimesCircle/>} text={"Leave Rejected"} number={4} color="bg-red-600"/>
            </div>
            </div>


          
        </div>
  
  )
}

export default AdminSummary