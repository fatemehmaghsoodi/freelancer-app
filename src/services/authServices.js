import http from "./httpService";

export function getOTP(data) {
    return http.post("user/get-otp", data)
    .then(({data})=>{
        return data.data
    })
}

export function checkOTP(data) {
    return http.post("user/check-otp", data)
    .then(({data})=>{
        return data.data
    })
}

export function getUser(){
    return http.get("user/profile")
    .then(({data})=>{
        return data.data
    })
}

export function getUsersApi(){
    return http.get('/admin/user/list')
    .then(({data}) => data.data)
}

export function changeUserStatusApi({id, data}){
    return http.patch(`/admin/user/verify/${id}`, data)
    .then(({data}) => data.data)
}

export function completeProfileApi(data){
    return http.post(`/user/complete-profile`, data)
    .then(({data}) => data.data)
}
