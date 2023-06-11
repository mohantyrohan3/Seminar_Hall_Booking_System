import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import AdminDepartment from '../components/Dashboard/AdminDepartment/AdminDepartment';

export default function AdminDepartmentRoute() {

const [loading, setLoading] = useState(true);


useEffect(() => {
    

    const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
}, []);





  return (
   <>
        {
            loading?(
                <Loading/>
            ):
            (   
                <>
                    <AdminDepartment/>
                </>
            )
        }



   </>
  )
}
