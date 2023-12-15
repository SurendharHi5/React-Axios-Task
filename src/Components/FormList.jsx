import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FormList({datas, deleteData, editData}) {

  const deleteClick = (id) => {
    deleteData(id);
}
    
  return (
    <div >
        <div  className='d-flex flex-column justify-content-center align-items-center bg-light'>
        <h1>List of Users</h1>
        <Link to="/">
        <button type="submit" className="btn btn-primary">Add +</button>
        </Link>
        </div>
        <br />
        <div className='rounded bg-white border shadow p-4'>
        <table class="table table-striped table-hover">
  <thead>
    <tr className=''>
      <th >ID</th>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>PHONE</th>
      <th>WEBSITE</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        datas.map((data,i) =>(
            <tr key={data.id}>
                <td>{i=i+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td className=''>
                <Link to="/edit">
                <button onClick={()=>{editData(data)}} type="button" class="btn btn-sm btn-primary">Edit</button>
                </Link>
                <button onClick={()=>{deleteClick(data.id)}} type="button" class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        ))
    }
    </tbody>
    </table>
        </div>
    </div>
  )
}

export default FormList