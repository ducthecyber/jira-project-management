import { request } from "../configs/axios"
import { BASE_URL } from "../constants/common"

export const fetchProjectCategoryApi = () => {
    return request({
        url: `${BASE_URL}/ProjectCategory`,
        method: "GET",
    })
}