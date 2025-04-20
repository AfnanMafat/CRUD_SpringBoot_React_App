import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        username : "",
        name : "",
        email : ""
    });

    const {username,name,email} = user

    const onInputChange = (e) => {
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/Add",user)
        navigate("/");
    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

                    <h2 className='text-center m-4'>Register user</h2>

                    <form onSubmit={(e)=>{onSubmit(e)}}>
                    <div className='mb-3'>
                        {/* <label htmlFor='Name' className='form-label'>Name</label> */}
                        <input type='text' onChange={(e) => {onInputChange(e)}} className='form-control mt-5' placeholder="Enter User Name" name="username" value={username} ></input>
                        <input type='text' onChange={(e) => {onInputChange(e)}} className='form-control mt-5' placeholder="Enter Name" name="name" value={name}></input>
                        <input type='text' onChange={(e) => {onInputChange(e)}} className='form-control mt-5' placeholder="Enter Email" name="email" value={email}></input>
                        <button type='Submit' className='btn btn-outline-primary mt-5'>Submit</button>
                        <Link to={"/"} type='Submit' className='btn btn-outline-danger mt-5'>Cancle</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
} 
