import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import useMoveBack from '../../hook/useMoveBack'

function ProjectHeader({project}) {
    const navigate= useMoveBack()
  return (
    <div className='flex gap-x-2 items-center'>
        <button className='flex items-end' onClick={navigate}>
            <HiArrowRight/>
        </button>
        <h2 className='font-black'>لیست در خواست های {project?.project?.title}</h2>
    </div>
  )
}

export default ProjectHeader