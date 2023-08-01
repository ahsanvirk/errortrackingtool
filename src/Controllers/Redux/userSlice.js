import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Ahsan Virk"})
            state.push({name:"Johnny Mushroom"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;