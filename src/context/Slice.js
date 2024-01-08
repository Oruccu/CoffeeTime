import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name:'user',
    initialState:{
        user:{
            name:'',
            age:'',
            weight:'',
        },

    },
    reducers:{
        setUser(state, action){
            const name= action.payload.name;
            const age= action.payload.age;
            const weight= action.payload.weight;

            state.user.name= name;
            state.user.age= age;
            state.user.weight= weight;
        },

    }
})

export default Slice;
export const {setUser} = Slice.actions;