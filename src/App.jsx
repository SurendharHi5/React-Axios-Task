import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormList from './Components/FormList'
import InputArea from './Components/InputArea'
import axios from 'axios';
import EditForm from './Components/EditForm';

function App() {
  const [datas, setDatas] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setDatas(res.data))
    },[])

    const addData = (data)=>{
      data.id = datas.length > 0 ? datas[datas.length - 1].id + 1 : 1;
      setDatas([...datas,data])
    }

    const deleteData = (id)=>{
      const newData = datas.filter(
        (data) => data.id != id
      );
      setDatas(newData);
      setEdit(false);
    }

    const [edit,setEdit] = useState(false);
    const initialState = {id:0,name:'',email:'',phone:'',website:''}
    const [currentUser,setCurrentUser] = useState(initialState);

    const editData = (data)=>{
      setEdit(true);
      setCurrentUser({id:data.id,name:data.name,email:data.email,phone:data.phone,website:data.website});
    }

    const updateUser = (id,updatedUser)=>{
      setEdit(false);
      setDatas(datas.map((data)=>(data.id===id?updatedUser:data)))
    }

  return (
    <Router>
      <Routes>
        <Route exact path="/list" element={<FormList datas = {datas} deleteData= {deleteData} editData = {editData}/>}/>
        <Route exact path="/" element={<InputArea addData= {addData} />}/>
        <Route exact path='/edit' element={<EditForm setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}/>} />
      </Routes>
    </Router>

  )
}

export default App
