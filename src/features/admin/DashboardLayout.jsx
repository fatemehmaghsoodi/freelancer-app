import React from 'react'
import Loading from '../../ui/Loading'
import DashboardHeader from '../../ui/DashboardHeader'
import useProposals from '../proposal/useProposals'
import { useProjects } from '../../hook/useProject'
import useUsers from './useUsers'
import Stats from './Stats'

function DashboardLayout() {
    const {isLoading: isProposalsLoading, proposals}= useProposals()
    const {isLoading:isProjectsLoading, projects}= useProjects()
    const {isLoading:isUsersLoading, users}= useUsers()
  if(isProposalsLoading || isProjectsLoading || isUsersLoading) return <Loading/>

  return (
    <div>
        <DashboardHeader/>
        <Stats 
         proposals={proposals.length}
         projects={projects.length}
         users={users.length}
        />
    </div>
  )
}

export default DashboardLayout