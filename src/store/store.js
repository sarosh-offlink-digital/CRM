import { configureStore, createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name : 'navSelection',
    initialState : {value : 'lg:w-52'},
    reducers:{
        expand : (state) =>{
            state.value = 'lg:w-52'
        },
        contract : (state) =>{
            state.value = 'lg:w-20'
        }
    }
})

export const { expand, contract } = navSlice.actions;

const store = configureStore({
    reducer:{
        navSelection : navSlice.reducer
    }
})

export default store;