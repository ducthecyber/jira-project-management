import {request} from "../configs/axios"
import { BASE_URL } from "../constants/common"
export const fetchUserLogin = (data)=>{
  return request({
    url:`${BASE_URL}/Users/signin`,
    method:"POST",
    data:data,
  })
}

export const fetchUserRegister = (data)=>{
  return request ({
    url:`${BASE_URL}/Users/signup`,
    method:'POST',
    data:data
  })
}