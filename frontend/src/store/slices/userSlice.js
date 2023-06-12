import createSlice from '@reduxjs/toolkit/createSlice';


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





