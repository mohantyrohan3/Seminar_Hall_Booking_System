import React, { useEffect, useState } from 'react'
import AdminLogin from '../components/AdminLogin/AdminLogin'
import Loading from '../components/Loading/Loading';
import { Slide } from "react-awesome-reveal";

export default function AdminLoginRoute() {

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
               <AdminLogin/>
                </>
            )
        }

    </>
  )
}
