import { useQuery } from "@tanstack/react-query"
import { getOwnerProjectApi } from "../../services/projectService"

export function useOwnerProject(){
    const{data, isLoading, isError}= useQuery({
        queryKey:["owner-projects"],
        queryFn:getOwnerProjectApi
    })
    const {projects} = data || {}

    return {projects, isLoading, isError}
}