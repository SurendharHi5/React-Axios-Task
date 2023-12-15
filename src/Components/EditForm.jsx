import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EditForm(props) {

    const [user,setUser] = useState(props.currentUser)

    const navigate = useNavigate();

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])
 

    const inputChange = (event)=>{
        const {name,value} = event.target
  
        setUser({...user,[name]:value})
    }

  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
    <h1> Edit User</h1>
    <br />
        <form className="row g-3" onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name || !user.email){
                    return;
                }
                props.updateUser(user.id,user);
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

  <div className="col-auto">
  
    <button type="submit" className="btn btn-primary">Update</button>
   
  </div>

  {/* <div className="col-auto">
    <button onClick={()=>{props.setEdit(false)}}  type="submit" className="btn btn-primary">Cancel</button>
  </div> */}
</form>
    </div>
    </div>
  )
}

export default EditForm