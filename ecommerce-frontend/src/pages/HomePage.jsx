import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"

const HomePage = () => {

  const [userdata, setuserdata] = useState("")

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:5001/auth/data")
        console.log("response.data   ", response.data)
        setuserdata(response.data)
      }
      catch (error) {
        console.log("error in home response  :  ", error)
      }
    }
    fetchdata()
  }, [])

  return (
    <div >
      <div>
         <Navbar />
         </div>

      <div>     
        
      </div>
    </div>
  )
}

export default HomePage
