import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import AdminBooking from '../components/Dashboard/AdminBooking/AdminBooking';

export default function AdminBookingRoute() {

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
                    <AdminBooking/>
                </>
            )
        }
    </>
  )
}
