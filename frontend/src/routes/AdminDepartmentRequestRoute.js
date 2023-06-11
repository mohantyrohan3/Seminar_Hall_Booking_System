import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import AdminDepartmentRequest from '../components/Dashboard/AdminDepartmentRequest/AdminDepartmentRequest';

export default function AdminDepartmentRequestRoute() {

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
                    <AdminDepartmentRequest/>
                </>
            )
        }

    </>
  )
}
