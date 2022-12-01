import { request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchCreateTaskApi = (data) => {
    return request({
        url: `${BASE_URL}/Project/createTask`,
        method: "POST",
        data: data,
    })
}
export const fetchTaskDetailApi = (taskId) => {
    return request({
        url: `${BASE_URL}/Project/getTaskDetail?taskId=${taskId}`,
        method: "GET",
        data: taskId,
    })
}

export const fetchUpdateStatusApi = (status) => {
    return request({
        url: `${BASE_URL}/Project/updateStatus`,
        method: "PUT",
        data: status,
    })
}
export const fetchUpdatePriorityApi = (priority) => {
    return request({
        url: `${BASE_URL}/Project/updatePriority`,
        method: "PUT",
        data: priority,
    })
}
export const fetchUpdateDesciptionApi = (desciption) => {
    return request({
        url: `${BASE_URL}/Project/updateDescription`,
        method: "PUT",
        data: desciption,
    })
}
export const fetchUpdateTimeTrackingApi = (timeTracking) => {
    return request({
        url: `${BASE_URL}/Project/updateTimeTracking`,
        method: "PUT",
        data: timeTracking,
    })
}
export const fetchUpdateEstimateApi = (estimate) => {
    return request({
        url: `${BASE_URL}/Project/updateEstimate`,
        method: "PUT",
        data: estimate,
    })
}

export const fetchUpdateTaskDetailApi = (data) => {
    return request({
        url: `${BASE_URL}/Project/updateTask`,
        method: "POST",
        data: data,
    })
}

export const fetchRemoveTaskApi = (taskId) => {
    return request({
        url: `${BASE_URL}/Project/removeTask?taskId=${taskId}`,
        method: "DELETE",
    })
}