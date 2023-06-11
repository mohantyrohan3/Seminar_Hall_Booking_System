import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import DepartmentHistory from '../components/Dashboard/DepartmentHistory/DepartmentHistory';

export default function DepartmentHistoryRoute() {

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
                    <DepartmentHistory/>
                </>
            )
        }
   
   </>
  )
}
