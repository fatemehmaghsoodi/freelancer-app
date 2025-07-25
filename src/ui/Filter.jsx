import { queryOptions } from '@tanstack/react-query'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({filterField, options}) {
    const [searchParams, setSearchParams]= useSearchParams()
    const currentFilter= searchParams.get(filterField) || options.at(0).value
    const handelClick= (value) =>{
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }

  return (
    <div className='flex gap-x-1 items-center'>
        <span>وضعیت</span>
        <div className='flex gap-x-1 border rounded-md '>
            {options.map(item =>{
                const isActive = currentFilter === item.value
                return <button 
                        key={item.value}
                        onClick={()=>handelClick(item.value)} 
                        disabled={isActive}
                        className={`bg-primary-800 rounded-md px-3 py-1.5 ${isActive ? 'bg-secondary-900' : ''}`}>
                            {item.label}
                        </button>
            })}
        </div>
    </div>
  )
}

export default Filter