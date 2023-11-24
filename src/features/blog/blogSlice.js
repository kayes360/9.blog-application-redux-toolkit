import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlog } from "./blogAPI"

//initial state
 const initialState = {
    isLoading : false,
    isError : false,
    error : '',
    blog : [],
 }
 
 export const fetchBlog = createAsyncThunk("blog/getBlog", async (id)=>{
    const blog = await getBlog(id)
    return blog
 })

 export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchBlog.pending, (state) => {
            state.isError= false,
            state.isLoading= true
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.isError= false,
            state.isLoading= false,
            state.blog = action.payload
        })
        .addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading= false,
            state.isError= true,
            state.error= action.error?.message,
            state.blog = []
        })
    }
 })

 export default blogSlice.reducer
