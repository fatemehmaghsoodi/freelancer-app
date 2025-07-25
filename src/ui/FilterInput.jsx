import React from 'react'
import { useSearchParams } from 'react-router-dom'

function FilterInput({options, filterField}) {
    const [searchParams, setSearchParams]= useSearchParams()
    const value = searchParams.get(filterField || "")
    const filterHandler=(e)=>{
        searchParams.set(filterField, e.target.value)
        setSearchParams(searchParams)
    }
  return (
    <select className='bg-primary-900 max-h-11 w-auto border rounded-md py-1 px-2' value={value} onChange={filterHandler}>
       {options.map((item) =>( 
            <option key={item.value} value={item.value}>
                {item.label}
           </option>
       ))}
    </select>
  )
}

export default FilterInput