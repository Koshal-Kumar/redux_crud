import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {updateUser} from './UserReducer'


function Edit() {

    const {id} = useParams()
    const users = useSelector(state => state.users)

    const existingUsers = users.filter(f => f.id == id)
    const {name :uname , email:umail } =existingUsers[0]
    const [name,setName] =useState(uname)
     const [email,setEmail] =useState(umail)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUpdate = (event) =>{
        event.preventDefault()
        dispatch(updateUser({
            id : id,
            name : name,
            email : email
        }))
        navigate('/');
    }
  return (
    <div>
      <h2>this is the edit page</h2>

        <div className="d-flex vh-100 w-100 justify-content-center align-items-center">
            <div className="border bg-secondary text-white w-50 p-5">
                <h2>Update User</h2> 
                <form  onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" className='form-control' 
                    value={name}
                    onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" className='form-control'
                    value={email}
                    onChange={ e => setEmail(e.target.value)} />
                </div>
                        <br />
                <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Edit
