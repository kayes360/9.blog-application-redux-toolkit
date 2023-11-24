import axiosInstance  from "../../utils/axios";

export const updateBlog = async (dispatchedData)=>{
    const {id, updatedData} =dispatchedData 

    const response = await axiosInstance.patch(`blogs/${id}`, updatedData,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
    return response.data
}