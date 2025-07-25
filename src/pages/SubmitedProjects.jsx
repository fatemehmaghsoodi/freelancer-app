import React from 'react'
import ProjectHeader from '../features/freelancer/project/ProjectHeader'
import ProjectsTabel from '../features/freelancer/project/ProjectsTabel'

function SubmitedProjects() {
  return (
    <div className='bg-primary-900 p-5'>
      <ProjectHeader/>
      <ProjectsTabel/>
    </div>
  )
}

export default SubmitedProjects