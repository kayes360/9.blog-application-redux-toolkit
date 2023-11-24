import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedBlogs} from "./relatedBlogsAPI"

//initial state
 const initialState = {
    isLoading : false,
    isError : false,
    error : '',
    relatedBlogs : [],
 }
 
 export const fetchRelatedBlogs = createAsyncThunk("blogs/getRelatedBlogs", async ({tags, currentBlogId})=>{
    
    const relatedBlogs = await getRelatedBlogs({tags, currentBlogId})
    return relatedBlogs
 })

 export const relatedBlogsSlice = createSlice({
    name: 'relatedBlogs',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchRelatedBlogs.pending, (state) => {
            state.isError= false,
            state.isLoading= true
        })
        .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
            state.isError= false,
            state.isLoading= false,
            state.relatedBlogs = action.payload
        })
        .addCase(fetchRelatedBlogs.rejected, (state, action) => {
            state.isLoading= false,
            state.isError= true,
            state.error= action.error?.message,
            state.relatedBlogs = []
        })
    }
 })

 export default relatedBlogsSlice.reducer
