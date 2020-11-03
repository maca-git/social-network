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
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(res => res.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
      .then(res => res.data)
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => res.data)
  }
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`)
      .then(res => res.data)
  },
  login( email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe})
      .then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(res => res.data)
  }
}