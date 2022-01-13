import React, { useState } from "react"
import { Button } from "react-bootstrap"
import {useParams,useNavigate,Navigate}from 'react-router-dom'
function Details (login){
    const {id}=useParams()
    const navigate=useNavigate()
    const [users,setUsers] = useState({})
    const found = users.find(el=>el.id==id)
    return (
        <div>
    {
        login ? <>  <h2>{found.name}</h2>

        <h2>{found.age}</h2>
        <Button onClick={()=>navigate (-1)}>Go Back</Button>
        <Button  onClick={()=>navigate('/')}  >  Home  </Button>
        </>:<Navigate to='/'/>
    }
        </div>
    )
}
export default Details