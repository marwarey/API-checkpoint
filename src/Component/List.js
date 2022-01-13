import React, { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom'
import CardUser from "./CardUser"
function List({login}){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response=> setUsers(response))
        .catch(err=> console.log(err))
    },[])
    return (
        <div>
           {login ? users.map(el=> <CardUser el={el} key={el.id}></CardUser>):<Navigate to='/'></Navigate>}

        </div>
    )
}
export default List