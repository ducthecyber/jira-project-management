import { request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchGetStatusApi = () => {
    return request({
        url: `${BASE_URL}/Status/getAll`,
        method: "GET",
    })
}

export const fetchGetPriorityApi = () => {
    return request({
        url: `${BASE_URL}/Priority/getAll`,
        method: "GET",
    })
}

export const fetchGetTaskTypeApi = () => {
    return request({
        url: `${BASE_URL}/TaskType/getAll`,
        method: "GET",
    })
}