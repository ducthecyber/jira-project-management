import { USER_LOGIN_KEY } from "../../constants/common"
import { GET_USER_LIST, SET_USER_INFO } from "../types/userType"
import { EDIT_USER, GET_USER, GET_USER_BY_PROJECT } from "../types/userType";

//localStorage
let userInfo = localStorage.getItem(USER_LOGIN_KEY);

if (userInfo) {
    userInfo = JSON.parse(userInfo)
}

const stateDefault = {
    userInfo: userInfo,
    arrUser: [],
    userByProject: [],
    arrUser: [],
    userEdit: {},
}

export const userReducer = (state = stateDefault, { payload, type }) => {
    switch (type) {
        case SET_USER_INFO: {
            let data = { ...state.userInfo }
            data = payload
            localStorage.setItem(SET_USER_INFO, JSON.stringify(data))
            return { ...state, userInfo: data }
        }
        case GET_USER_LIST: {
            let data = { ...state.arrUser }
            data = payload
            return { ...state, arrUser: data }
        }
        case GET_USER: {
            return { ...state, userSearch: payload }
        }
        case GET_USER_BY_PROJECT: {
            return { ...state, userByProject: payload }
        }
        case EDIT_USER: {
            return { ...state, userEdit: payload }
        }
        default: return state
    }
}