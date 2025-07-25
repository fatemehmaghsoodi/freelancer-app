import React from 'react'
import ProjectHeader from '../features/project/ProjectHeader';
import ProjectTable from '../features/project/ProjectTable';
import useProject from '../features/project/useProject'
import Loading from '../ui/Loading';

function Project() {
  const {isLoading, project} = useProject()
  if(isLoading) return <Loading/>
  return (
    <div className='bg-primary-900 p-5'>
      <ProjectHeader project={project} />
      <ProjectTable proposals={project?.project?.proposals}/>
    </div>
  )
}

export default Project