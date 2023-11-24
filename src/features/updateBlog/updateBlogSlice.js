import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { updateBlog } from "./updateBlogAPI"

//initial state
 const initialState = {
    isLoading : false,
    isError : false,
    error : '',
    blog : [],
 }
 
 export const fetchUpdateBlog = createAsyncThunk("blog/updateBlog", async (dispatchedData)=>{
 console.log("dispatchedData",dispatchedData)
    const updatedBlog = await updateBlog(dispatchedData)
    return updatedBlog
 })

 export const updateBlogSlice = createSlice({
    name: 'updateblog',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUpdateBlog.pending, (state) => {
            state.isError= false,
            state.isLoading= true
        })
        .addCase(fetchUpdateBlog.fulfilled, (state, action) => {

            state.isError= false,
            state.isLoading= false,
            state.blog = action.payload 
        })
        .addCase(fetchUpdateBlog.rejected, (state, action) => {
            state.isLoading= false,
            state.isError= true,
            state.error= action.error?.message,
            state.blog = []
        })
    }
 })

 export default updateBlogSlice.reducer
