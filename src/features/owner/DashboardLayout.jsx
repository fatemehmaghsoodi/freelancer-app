import React from 'react'
import Loading from '../../ui/Loading'
import { useOwnerProject } from '../projects/useOwnerProject'
import DashboardHeader from '../../ui/DashboardHeader'
import Stats from './Stats'

function DashboardLayout() {
    const {projects, isLoading}= useOwnerProject()
    if(isLoading) return <Loading/>
    
  return (
    <div>
        <DashboardHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashboardLayout