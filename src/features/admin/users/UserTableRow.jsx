import { Label } from "@headlessui/react"
import { useState } from "react"
import Modal from "../../../ui/Modal"
import Table from "../../../ui/Table"
import { statusOptions } from "../../../utils/StatusOptions"
import ChangeUserStatus from "./ChangeUserStatus"

function UserTableRow({ user , index}){    
    const [isOpen, setIsOpen]= useState(false)
    return (
        <Table.row>
            <td className="px-6 py-4">
                {index+1}
            </td>
            <td className="px-6 py-4">
               {user.name}
            </td>
            <td className="px-6 py-4">
                {user.phoneNumber}
            </td>
            <td className="px-6 py-4">
                {statusOptions[user.status].label}
            </td>
            <td className="px-6 py-4 ">
                {user.role}
            </td>
            <td className="px-6 py-4">
                {user.isActive ? "فعال" : "غیر فعال"}
            </td>
            <td>
            <button className="text-secondary-900" onClick={()=>setIsOpen(true)}>تغییر وضعیت</button>
            <Modal
            isOpen={isOpen}
            onClose={()=>setIsOpen(false)}
            title=" تغییر وضعیت کاربر"
            >
            <ChangeUserStatus userId={user._id} onClose={()=>setIsOpen(false)} />
            </Modal>
            </td>
        </Table.row>  
)}

export default UserTableRow