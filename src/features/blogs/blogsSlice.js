import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlogs } from "./blogsAPI"

//initial state
 const initialState = {
    isLoading : false,
    isError : false,
    error : '',
    blogs : [],
 }
 
 export const fetchBlogs = createAsyncThunk("blogs/getBlogs", async ()=>{
    const blogs = await getBlogs()
    return blogs
 })

 export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.isError= false,
            state.isLoading= true
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isError= false,
            state.isLoading= false,
            state.blogs = action.payload
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading= false,
            state.isError= true,
            state.error= action.error?.message,
            state.blogs = []
        })
    }
 })

 export default blogsSlice.reducer
