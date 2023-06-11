import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import AdminHall from '../components/Dashboard/AdminHall/AdminHall';

export default function AdminHallRoute() {

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
                    <AdminHall/>
                </>
            )
        }
    
    
    </>
  )
}
