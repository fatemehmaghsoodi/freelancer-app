import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { completeProfileApi } from "../../services/authServices"

export default function useCompliteProfile(){
    const {isPending:isLoading, mutate:compliteProfile}= useMutation({
        mutationFn:completeProfileApi,
        onSuccess:(data)=>{
            toast.success(data.message)
        },
        onError:(err)=> toast.error(err.response.data.message)
    })

    return {isLoading, compliteProfile}
}