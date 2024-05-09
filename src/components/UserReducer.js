import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./data";

const initialState = userlist
 const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        addUser : (state,action) =>{
            console.log(action.payload)
            state.push(action.payload);

        },
        updateUser : (state,action) =>{
            console.log(action.payload);
            const {id , name , email} = action.payload;
            const uu = state.find(user => user.id == id)
            if(uu){
                uu.id = id,
                uu.name = name,
                uu.email = email
            }
        },

        deleteUser : (state,action) =>{
            const {id} =action.payload;
            const uu = state.find(user => user.id == id)
            if(uu){
                return state.filter(user => user.id !== uu.id)
            }
        }
    }
 })

  export const {addUser , updateUser , deleteUser} = userSlice.actions;

 export default userSlice.reducer;