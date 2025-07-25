import React from 'react'
import useGetCategory from '../../../hook/useGetCategory'
import Filter from '../../../ui/Filter'
import FilterInput from '../../../ui/FilterInput'
const statusOption =[
  {
    label:"همه",
    value:"ALL"
  },
  {
    label:"باز",
    value:"OPEN"
  },
  {
    label:"بسته",
    value:"CLOSED"
  },
]
function ProjectHeader() {
  const {isLoading, transformCategories}= useGetCategory()
  return (
    <div className='flex flex-row justify-between items-center'> 
        <h2> لیست پروژه ها </h2>
        <div className='flex gap-x-2 text-xs'>
        <Filter filterField="status" options={statusOption} />
        <FilterInput
          filterField="category" 
          options={[{value:"ALL", label:"دسته بندی (همه)"}, ...transformCategories]}
        />
        <FilterInput 
          filterField="sort" 
          options={[{value:"latest", label:"قدیمی ترین"},{value:"newest", label:"جدیدترین"}]}
        />
        </div>
    </div>
  )
}

export default ProjectHeader