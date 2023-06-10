import React from 'react'
import "./Loading.css"
import {BounceLoader} from "react-spinners"

export default function Loading() {
  return (
    <>
        <div className='loader'>
        <BounceLoader color="#36d7b7"   size={100}/>
        </div>
    </>
  )
}
