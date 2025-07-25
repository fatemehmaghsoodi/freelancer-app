import React from 'react'
import useProposals from '../proposal/useProposals'
import Loading from '../../ui/Loading'
import DashboardHeader from '../../ui/DashboardHeader'
import Stats from './Stats'

function DashboardLayout() {
  const {isLoading, proposals}= useProposals()
  if(isLoading) return <Loading/>

  return (
    <div>
        <DashboardHeader/>
        <Stats proposals={proposals}/>
    </div>
  )
}

export default DashboardLayout