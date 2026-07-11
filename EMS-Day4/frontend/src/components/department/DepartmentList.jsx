import React from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component'
import { useEffect } from "react";
import { useState } from "react";
import { DepartmentButtons,columns } from "../../utils/DepartmentHelpers";
import axios from "axios";

const DepartmentList = () => {
  const [departments,setDepartments] = useState([])
  const [depLoading, setDeploading] = useState(false)
  useEffect(()=>{
     const fetchDepartments = async() =>{
      setDeploading(true)
       try {
      const response = await axios.get(
  "http://localhost:3000/api/department",
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);
            if(response.data.success)
            {
              let sno = 1;
                const data = await response.data.departments.map((dep)=>(
                  {
                    _id: dep._id,
                    sno: sno++,
                    dep_name: dep.dep_name,
                    action:(<DepartmentButtons _id={dep._id}/>)

                  }
                ))
                setDepartments(data)
            }

      } catch (error) {
        if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
      }
      finally{setDeploading(false)}
     }
     fetchDepartments()
  },[])
  return (
    <>{depLoading? <div>Loading...</div>:
    <div className="p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Departments
      </h2>

      {/* Search and Button */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search Department"
          className="w-80 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link
          to="/admin-dashboard/add-department"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
        >
          Add New Department
        </Link>
      </div>

      {/* Table will come here */}
      <div className="bg-white rounded-lg shadow p-4">
        <DataTable columns={columns} data={departments}/>
      </div>

    </div>
 } </>
  );
};

export default DepartmentList;