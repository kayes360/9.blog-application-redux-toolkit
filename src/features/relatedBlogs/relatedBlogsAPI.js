import axiosInstance  from "../../utils/axios";

export const getRelatedBlogs = async ({tags,currentBlogId})=>{
     
    const generateURLSlug = tags?.map((tag)=> `tags_like=${tag}`).join("&")+ `&id_ne=${currentBlogId}`
    const response = await axiosInstance.get(`blogs?${generateURLSlug}`)
 
    return response.data
}