import { useQuery } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import { getProjectsApi } from "../services/projectService"
import queryString from "query-string"
export function useProjects(){
    const {search}= useLocation()
    const queryObject= queryString.parse(search)
    const{data, isLoading, isError}= useQuery({
        queryKey:["projects", queryObject],
        queryFn:()=>getProjectsApi(search)
    })
    const {projects} = data || {}

    return {projects, isLoading, isError}
}