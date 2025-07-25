import React from 'react'
import { useState } from 'react'
import Modal from '../../ui/Modal'
import Table from '../../ui/Table'
import Tooltip from '../../ui/ToolTip'
import { truncateText } from '../../utils/truncateText'
import ChangeProposalStatus from './ChangePropsalStatus'
import {HiOutlinePencilAlt } from 'react-icons/hi'

const StatusStyle=[
    {
      label:"رد شده",
      className:"badg--danger"
    },
    {
      label:"در انتظار تایید",
      className:"badge--info"
    },
    {
      label:"تایید شده",
      className:"badge--success"
    },
]

function  ProposalTableRow({proposal, index}) {
    const [isStatusModal, setIsStatusModal] = useState(false)
  return (
    <Table.row>
        <td className="px-6 py-4">{index+1}</td>
        <td className="px-6 py-4">{proposal.user.name}</td>
        <td className="px-6 py-4">{truncateText(str(proposal.description), 30)}</td>
        <td className="px-6 py-4">{proposal.duration}</td>
        <td className="px-6 py-4">{proposal.price}</td>
        <td className="px-6 py-4">
          <p className={`badge ${StatusStyle[proposal.status].className}`}>
          {StatusStyle[proposal.status].label}
          </p>
        </td>
        <td className="px-6 py-4">
            <button onClick={()=>setIsStatusModal(true)}>
              <Tooltip content='تغییر وضعیت'>
                  <HiOutlinePencilAlt className='w-6 h-6'/> 
              </Tooltip>
            </button>
            <Modal
            isOpen={isStatusModal}
            onClose={()=>setIsStatusModal(false)}
            title=" تغییر وضعیت درخواست"
            >
            <ChangeProposalStatus proposalId={proposal._id} onClose={()=>setIsStatusModal(false)} />
            </Modal>
        </td>
    </Table.row>
  )
}

export default ProposalTableRow