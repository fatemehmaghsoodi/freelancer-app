import React from 'react'
import Empty from '../../ui/Empty';
import Table from '../../ui/Table'
import ProposalTableRow from './ProposalTableRow';

function ProjectTable({proposals}) {
    if(!proposals.length) return <Empty/>
  return (
      <div className='overflow-auto mt-2'>
        <Table>
            <Table.head>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3"> فریلنسر</th>
                <th scope="col" className="px-6 py-3">توضیحات</th>
                <th scope="col" className="px-6 py-3">زمان تحویل</th>
                <th scope="col" className="px-6 py-3"> هزینه</th>
                <th scope="col" className="px-6 py-3">وضعیت</th>
                <th scope="col" className="px-6 py-3">عملیات</th> 
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
    
  )
}

export default ProjectTable