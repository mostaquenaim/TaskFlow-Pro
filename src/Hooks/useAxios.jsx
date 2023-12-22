import axios from "axios";


const useAxios = () => {
    const instance = axios.create({
        baseURL: 'https://task-management-server-pink-nine.vercel.app',
      });
    return instance
};

export default useAxios;