import { USER_LOGIN_KEY } from "../../constants/common"
import { SET_USER_INFO } from "../types/userType"

//localStorage
let userInfo = localStorage.getItem(USER_LOGIN_KEY);

if(userInfo){
    userInfo= JSON.parse(userInfo)
}

const stateDefault = {
    userInfo:userInfo,
}

export const userReducer = (state= stateDefault,{payload,type})=>{
    switch(type){
        case SET_USER_INFO :{
            let data = {...state.userInfo}
            data = payload
            localStorage.setItem(SET_USER_INFO,JSON.stringify(data))
            return {...state,userInfo:data}
        }
        default:return state
    }
}