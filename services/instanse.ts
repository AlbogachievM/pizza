import axios from "axios";

export const instanse = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,

})