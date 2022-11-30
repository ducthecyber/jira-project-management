import { request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchGetCommentApi = (taskId) => {
    return request({
        url: `${BASE_URL}/Comment/getAll?taskId=${taskId}`,
        method: "GET"
    })
}

export const fetchCommentApi = (data) => {
    return request({
        url: `${BASE_URL}/Comment/insertComment`,
        method: "POST",
        data: data,
    })
}

export const fetchDeleteCommentApi = (commentId) => {
    return request({
        url: `${BASE_URL}/Comment/deleteComment?idComment=${commentId}`,
        method: "DELETE",
    })
}

export const fetchUpdateCommentApi = (commentId, content) => {
    return request({
        url: `${BASE_URL}/Comment/updateComment?id=${commentId}&contentComment=${content}`,
        method: "PUT",
    })
}

