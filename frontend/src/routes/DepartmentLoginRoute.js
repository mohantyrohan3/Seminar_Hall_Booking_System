import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import DepartmentLogin from '../components/DepartmentLogin/DepartmentLogin';

export default function DepartmentLoginRoute() {

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
                <DepartmentLogin/>
                </>
            )
        }

    </>
  )
}
