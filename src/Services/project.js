import { request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchCreateProjectAuthorizeApi = (newProject) => {
    return request({
        url: `${BASE_URL}/Project/createProjectAuthorize`,
        method: "POST",
        data: newProject,
    })
}

export const fetchGetAllProjectApi = (data) => {
    return request({
        url: `${BASE_URL}/Project/getAllProject`,
        method: "GET",
        data: data,
    })
}

export const fetchDeleteProjectApi = (id) => {
    return request({
        url: `${BASE_URL}/Project/deleteProject?projectId=${id}`,
        method: "DELETE",
    })
}

export const fetchGetProjectDetailApi = (id) => {
    return request({
        url: `${BASE_URL}/Project/getProjectDetail?id=${id}`,
        method: "GET"
    })
}

export const fetchUpdateProjectApi = (projectUpdate) => {
    return request({
        url: `${BASE_URL}/Project/updateProject?projectId=${projectUpdate.id}`,
        method: "PUT",
        data: projectUpdate,

    })
}

export const assignUserProjectApi = (userProject) => {
    return request({
        url: `${BASE_URL}/Project/assignUserProject`,
        method: "POST",
        data: userProject,
    })
}



