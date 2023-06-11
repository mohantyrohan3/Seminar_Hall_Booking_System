import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import DepartmentBooking from '../components/Dashboard/DepartmentBooking/DepartmentBooking';

export default function DepartmentBookingRoute() {

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
                    <DepartmentBooking/>
                </>
            )
        }
    
    </>
  )
}
