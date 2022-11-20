import axios from 'axios'
import { SET_USER_INFO } from '../types/userType'

export const setUserAction =(values)=> {
    return{
        type:SET_USER_INFO,
        payload:values,
    }
}