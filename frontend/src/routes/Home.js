import React, { useEffect, useState } from 'react'
import HomeUpper from '../components/HomeUpper/HomeUpper'
import HomeLower from '../components/HomeLower/HomeLower'
import Loading from '../components/Loading/Loading';

export default function Home() {

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
                <HomeUpper/>
                <HomeLower/>
                </>
            )
        }
    </>
  )
}
