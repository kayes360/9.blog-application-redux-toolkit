import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://nine-blog-application-redux-toolkit.onrender.com/', 
  });

  export default axiosInstance

  