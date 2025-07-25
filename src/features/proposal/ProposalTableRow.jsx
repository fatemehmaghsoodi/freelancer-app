import Table from "../../ui/Table"
import { useState } from "react"
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import { truncateText } from "../../utils/truncateText"
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

function ProposalTableRow({ proposal , index}){
    
    return (
        <Table.row>
            <td className="px-6 py-4">
                {index+1}
            </td>
            <td className="px-6 py-4">
               {truncateText(proposal.description, 50)}
            </td>
            <td className="px-6 py-4">
                {toPersianNumbers(proposal.duration)} روز
            </td>
            <td className="px-6 py-4">
                {toPersianNumbersWithComma(proposal.price)}
            </td>
            <td className="px-6 py-4 ">
                <p className={`badge ${StatusStyle[proposal.status].className}`}>
                {StatusStyle[proposal.status].label}
                </p>
            </td>
        </Table.row>  
)}

export default ProposalTableRow