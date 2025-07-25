import { useState } from "react";
import { FiEdit3, FiFileText } from "react-icons/fi";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table"
import { toLocalDateShort } from "../../../utils/toLocalDateShort"
import { toPersianNumbers } from "../../../utils/toPersianNumber"
import CreateProposal from "./CreateProposal";
const projectStatus= {
    CLOSED:{
        label:"بسته",
        className:"badg--danger"
    },
    OPEN:{
        label:"باز",
        className:"badge--success"
    }
}
function ProjectRow({ project , index}){
    const [isProposalOpen, setIsProposalOpen]= useState(false)

    return (
        <Table.row>
            <td className="px-6 py-4">
                {index+1}
            </td>
            <td className="px-6 py-4">
               {project.title}
            </td>
            <td className="px-6 py-4">
                {toPersianNumbers(project.budget)}
            </td>
            <td className="px-6 py-4">
                {toLocalDateShort(project.deadline)}
            </td>
            <td>
                <p className={`badge ${projectStatus[project.status].className}`}>
                {projectStatus[project.status].label}
                </p>
            </td>
            <td>
            <button className="px-2" onClick={()=>setIsProposalOpen(true)}>
                    <FiFileText className="text-secondary-900 text-lg"/>
                </button>
                <Modal
                title={`درخواست انجام پروژه "${project.title}"`}
                isOpen={isProposalOpen}
                onClose={()=>setIsProposalOpen(false)}
                >
                <CreateProposal projectId={project._id} onClose={()=>setIsProposalOpen(false)}/>
                </Modal>
            </td>
        </Table.row>  
)}

export default ProjectRow