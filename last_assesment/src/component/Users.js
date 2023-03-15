import axios from 'axios'
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'

function Users() {

    const [users,setUsers] = useState([])

    const columns = [
        {title : 'ID', field : 'id'},
        {title : 'Name', field : 'name'},
        {title : 'Email', field : 'email'},
        {title : 'Phone Number', field : 'phone'}
    ]

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setUsers(res.data);})
            console.log('res:',users)
    },[users])


  return (
    <div>
        <MaterialTable 
        title = "userData"
        data = {users}
        columns={columns} />
    </div>
  )
}

export default Users