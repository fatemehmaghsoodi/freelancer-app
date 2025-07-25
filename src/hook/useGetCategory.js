import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/category";

export default function useGetCategory() {
    const {isLoading, data}= useQuery({
        queryKey:['category'],
        queryFn:getCategoryApi
    })
    const {categories:rawcategories = []} = data || {}

    const categories = rawcategories.map((category)=>({
        label:category.title,
        value:category._id
    }))

    const transformCategories = rawcategories.map((category)=>({
        label:category.title,
        value:category.englishTitle
    }))


    return {isLoading, categories, transformCategories}
}