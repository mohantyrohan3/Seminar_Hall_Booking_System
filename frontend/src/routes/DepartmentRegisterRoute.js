import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import DepartmentRegister from '../components/DepartmentRegister/DepartmentRegister';

export default function DepartmentRegisterRoute() {

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
                <DepartmentRegister/>
                </>
            )
        }
   </>
  )
}
