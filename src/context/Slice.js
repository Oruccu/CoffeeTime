import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: '',
            age: '',
            weight: '',
        },
        t: 'a'
    },
    reducers: {
        setUser(state, action) {
            const name = action.payload.name;
            const age = action.payload.age;
            const weight = action.payload.weight;
            
            state.user.name = name;
            state.user.age = age;
            state.user.weight = weight;
        },
        setLanguage(state, action){
            const selectLanguage = action.payload.t;
            state.t = selectLanguage;

        }

    }
})

export default Slice;
export const { setUser, setLanguage } = Slice.actions;