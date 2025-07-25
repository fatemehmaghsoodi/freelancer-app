import Table from "../../ui/Table"
import {FiTrash, FiEdit3} from "react-icons/fi"
import DeleteConfirm from "../../ui/DeleteConfirm"
import useRemoveProject from "./useRemoveProject"
import { useState } from "react"
import { toLocalDateShort } from "../../utils/toLocalDateShort"
import { toPersianNumbers } from "../../utils/toPersianNumber"
import CreateProjectForm from "./CreateProjectForm"
import ToggleProjectStatus from "./ToggleProjectStatus"
import { HiEye } from "react-icons/hi"
import { Link } from "react-router-dom"
import Modal from "../../ui/Modal"
function ProjectTableRow({ project , index}){
    const [isDeleteOpen, setIsDeleteOpen]= useState(false)
    const {removeProject, isDeleting}= useRemoveProject()
    const [isEditOpen, setIsEditOpen]= useState(false)
    
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
            <td className="px-6 py-4 ">
                {project.tags.map((tag, i)=> <span key={i} className="btn--secondary-outLine text-nowrap mx-0.5 px-1">{tag}</span>)}
               
            </td>
            <td className="px-6 py-4">
                {project.freelancer?.name || "-"}
            </td>
            <td className="px-6 py-4">
                <ToggleProjectStatus className="w-full" project={project}/>
            </td>
            <td className="px-6 py-4 flex justify-center">
                <button className="px-2" onClick={()=>setIsDeleteOpen(true)}>
                    <FiTrash className="text-secondary-900 text-lg"/>
                </button>
                <Modal
                    isOpen={isDeleteOpen}
                    onClose={()=>setIsDeleteOpen(false)}
                    title={`حذف ${project.title}`}
                       
                >
                    <DeleteConfirm
                     onClose= {()=>setIsDeleteOpen(false)}
                     item={project.title}
                     onConfirm={()=>removeProject(project._id, {
                        onSuccess:()=>{
                            setIsDeleteOpen(false)
                        }
                     })}
                    />
                </Modal>
                <button className="px-2" onClick={()=>setIsEditOpen(true)}>
                    <FiEdit3 className="text-secondary-900 text-lg"/>
                </button>
                <Modal
                title="ویرایش پروژه"
                isOpen={isEditOpen}
                onClose={()=>setIsEditOpen(false)}
                >
                <CreateProjectForm projectToEdit={project} onClose={()=>setIsEditOpen(false)}/>
                </Modal>
            </td>
            <td className="px-6 py-4">
                <Link to={project._id} className="flex justify-center">
                    <HiEye width={40}/>
                </Link>
            </td>
        </Table.row>  
)}

export default ProjectTableRow