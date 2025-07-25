import React from 'react'
import { useProjects } from '../../../hook/useProject'
import Table from '../../../ui/Table'
import ProjectRow from './ProjectRow'
function ProjectsTabel() {
    const {projects, isLoading} = useProjects()
    // if(isLoading) return <isLoading/>
  return (
    <>
      <div className='overflow-auto mt-2'>
        <Table>
            <Table.head>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">عنوان پروژه</th>
                <th scope="col" className="px-6 py-3">بودجه</th>
                <th scope="col" className="px-6 py-3">ددلاین</th>
                <th scope="col" className="px-6 py-3">وضعیت</th>
                <th scope="col" className="px-6 py-3">عملیات</th> 
            </Table.head>
            <Table.body>
                {projects && projects.map((project, index)=>
                  <ProjectRow
                   key= {project._id}
                   project= {project}
                   index= {index}
                   />
                )} 
            </Table.body> 
        </Table>
      </div>
    </>
  )
}

export default ProjectsTabel