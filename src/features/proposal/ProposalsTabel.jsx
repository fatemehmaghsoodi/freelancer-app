import React from 'react'
import Loading from '../../ui/Loading'
import Table from '../../ui/Table'
import useProposals from './useProposals'
import ProposalTableRow from './ProposalTableRow'

function ProposalsTabel() {
    const {proposals, isLoading}= useProposals()
    if (isLoading) return <Loading/>
  return (
    <>
    <div className='bg-primary-900 p-5'>
      <div className='flex flex-row justify-between items-center'> 
        <h2>لیست درخواست ها </h2>
        {/* <button onClick={()=>setIsOpen(true)} className='btn btn--secondary-outLine max-w-40'>اضافه کردن پروژه جدید</button> */}
        {/* <Modal
          title="اضافه کردن پروژه"
          isOpen={isOpen}
          onClose={()=>setIsOpen(false)}
        >
          <CreateProjectForm onClose={()=>setIsOpen(false)}/>
        </Modal> */}
      </div>
      <div className='overflow-auto mt-2'>
        <Table>
            <Table.head>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3"> توضیحات</th>
                <th scope="col" className="px-6 py-3">زمان تحویل</th>
                <th scope="col" className="px-6 py-3">هزینه</th>
                <th scope="col" className="px-6 py-3">وضعیت </th>
            </Table.head>
            <Table.body>
                {proposals && proposals.map((proposal, index)=>
                  <ProposalTableRow
                   key= {proposal._id}
                   proposal= {proposal}
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

export default ProposalsTabel