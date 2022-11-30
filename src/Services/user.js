import {  request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchUserLogin = (data) => {
    return request({
        url: `${BASE_URL}/Users/signin`,
        method: "POST",
        data: data
    })
}


export const fetchUserRegister = (data) => {
    return request({
        url: `${BASE_URL}/Users/signup`,
        method: "POST",
        data: data
    })
}

export const getUserApi = (keyWord) => {
    return request({
        url: `${BASE_URL}/Users/getUser?keyword=${keyWord}`,
        method: "GET",
    })
}

export const getUserListApi = () => {
    return request({
        url: `${BASE_URL}/Users/getUser`,
        method: "GET",
    })
}

export const getUserDetailApi = (id) => {
    return request({
        url: `${BASE_URL}/Users/getUser?id=${id}`,
        method: "GET",
    })
}

export const removeUserProjectApi = (userDelete) => {
    return request({
        url: `${BASE_URL}/Project/removeUserFromProject`,
        method: "POST",
        data: userDelete,
    })
}

export const getUserByProjectApi = (projectId) => {
    return request({
        url: `${BASE_URL}/Users/getUserByProjectId?idProject=${projectId}`,
        method: "GET",
    })
}

export const fetchDeleteUserApi = (userId) => {
    return request({
        url: `${BASE_URL}/Users/deleteUser?id=${userId}`,
        method: "DELETE",
    })
}

export const fetchUpdateUserApi = (userUpdate) => {
    return request({
        url: `${BASE_URL}/Users/editUser`,
        method: "PUT",
        data: userUpdate
    })
}