import React from 'react'
import Table from '../../ui/Table'
import { useOwnerProject } from './useOwnerProject'
import ProjectTableRow from './ProjectTableRow'
import { useState } from 'react'
import CreateProjectForm from './CreateProjectForm'
import Loading from '../../ui/Loading'
import Modal from '../../ui/Modal'

function ProjectsTable() {
  
  const {isLoading, projects}= useOwnerProject()
  
  const [isOpen, setIsOpen] = useState(false)

  if(isLoading) return <Loading/>

  return (
    <>
    <div className='bg-primary-900 p-5'>
      <div className='flex flex-row justify-between items-center'> 
        <h2>پروژه های شما</h2>
        <button onClick={()=>setIsOpen(true)} className='btn btn--secondary-outLine max-w-40'>اضافه کردن پروژه جدید</button>
        <Modal
          title="اضافه کردن پروژه"
          isOpen={isOpen}
          onClose={()=>setIsOpen(false)}
        >
          <CreateProjectForm onClose={()=>setIsOpen(false)}/>
        </Modal>
      </div>
      <div className='overflow-auto mt-2'>
        <Table>
            <Table.head>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">عنوان پروژه</th>
                <th scope="col" className="px-6 py-3">بودجه</th>
                <th scope="col" className="px-6 py-3">ددلاین</th>
                <th scope="col" className="px-6 py-3">تگ ها</th>
                <th scope="col" className="px-6 py-3">فریلنسر</th>
                <th scope="col" className="px-6 py-3">وضعیت</th>
                <th scope="col" className="px-6 py-3">عملیات</th> 
                <th scope="col" className="px-6 py-3">درخواست ها</th> 
            </Table.head>
            <Table.body>
                {projects && projects.map((project, index)=>
                  <ProjectTableRow
                   key= {project._id}
                   project= {project}
                   index= {index}
                   />
                )} 
            </Table.body> 
        </Table>
      </div>
    </div>
    </>
  )
}

export default ProjectsTable