import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';


function Create() {

  const [name,setName] =useState('')
  const [email,setEmail] =useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) =>state.users)
  console.log(users);
  const handleSubmit = (event) =>{
      event.preventDefault();
      dispatch(addUser({id: users[users.length - 1].id + 1 , name , email}))
      navigate('/')
  }

  return (
    <div className="d-flex vh-100 w-100 justify-content-center align-items-center">
      <div className="border bg-secondary text-white w-50 p-5">
          <h2>Add New User</h2> 
        <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name : </label>
              <input type="text" name="name" className='form-control' 
              onChange={e => setName(e.target.value)}/>
          </div>
          <div>
              <label htmlFor="email">Email : </label>
              <input type="email" name="email" className='form-control'
              onChange={ e => setEmail(e.target.value)} />
          </div>
                  <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create;
