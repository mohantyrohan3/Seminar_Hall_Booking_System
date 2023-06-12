import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";



const initialState = {
    status:'Not Authenticated',
    user: null,
}


const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        addStatus(state,action){
            state.status = "Authenticated";
            state.user = action.payload;
        },
        removeStatus(state,action){
            state.status = "Not Authenticated";
            state.user = null;
        }
    }
})


export const {addStatus , removeStatus} = userSlice.actions;
export default userSlice.reducer;


export function checkauth() {
    return async function checkAuthThunk(dispatch,getState) {

        try{
                const response = await axios.get('https://seminar.rohankm.online/api/details', {
                    withCredentials: true
                    });
                if(response.data.status === 'Authenticated'){
                    dispatch(addStatus(response.data.details.type));
                }
                else{
                    dispatch(removeStatus());
                }      
        }
        catch(err){
            console.log(err);
        }
    }
}


