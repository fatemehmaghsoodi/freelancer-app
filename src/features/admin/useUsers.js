import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authServices";

export default function useUsers(){
   const {data, isLoading}= useQuery({
        queryKey:['users'],
        queryFn:getUsersApi
    })
    const {users} = data || {}
    return{users, isLoading}
}