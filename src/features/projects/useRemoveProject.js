import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { removeProjectApi } from "../../services/projectService"

function useRemoveProject(){
   const queryClient= useQueryClient()
   const {mutate:removeProject, isPending:isDeleting}= useMutation({
        mutationFn:removeProjectApi,
        onSuccess:(data)=> {
            toast.success(data.message)
            queryClient.invalidateQueries({
            queryKey:["owner-projects"]   })
        },
        onError:(error)=>toast.error(error?.response?.data?.message)
    });
    return {removeProject, isDeleting}
}

export default useRemoveProject