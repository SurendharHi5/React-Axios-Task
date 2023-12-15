import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function InputArea(props) {

  const initialState = {id:0,name:'',email:'',phone:'',website:''}
  const [user, setUser] = useState(initialState);

  const navigate = useNavigate();

  const inputChange = (event)=>{
      const {name,value} = event.target

      setUser({...user,[name]:value})
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
    <h1> Add User</h1>
    <br />
        <form className="row g-3" onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name || !user.email){
                    return;
                }
                props.addData(user);
                setUser(initialState)
                navigate("/list");
            }
         } >
  <div className="col-md-6">
    <label className="form-label">Name</label>
    <input onChange={inputChange} type="text" className="form-control" name="name" value={user.name}  />
  </div>
  <div className="col-md-6">
    <label className="form-label">Phone</label>
    <input onChange={inputChange} type="text" className="form-control" name="phone" value={user.phone}  />
  </div>
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input onChange={inputChange} type="text" className="form-control" name="email" value={user.email}  />
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Website</label>
    <input onChange={inputChange} type="text" className="form-control" name="website" value={user.website}  />
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
</form>
    </div>
  )
}

export default InputArea