import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { 
    "api-key": "ef667c3a-04cf-47c8-bb11-3913cb6c41de" 
  } 
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(res => res.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then(res => res.data)
  },
  auth() {
    return instance.get(`auth/me`)
      .then(res => res.data)
  }
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(res => res.data)
  },
}