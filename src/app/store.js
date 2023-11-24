import { configureStore } from '@reduxjs/toolkit'

import blogsReducer from '../features/blogs/blogsSlice' 
import blogReducer from '../features/blog/blogSlice' 
import sortReducer from '../features/sort/sortSlice'
import filterReducer from '../features/filter/filterSlice'  
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice'  
import updateBlogReducer from '../features/updateBlog/updateBlogSlice'  

export const store = configureStore({ 
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
        updateBlog: updateBlogReducer,
        sort: sortReducer,
        filter: filterReducer, 
        relatedBlogs: relatedBlogsReducer, 
    }
})