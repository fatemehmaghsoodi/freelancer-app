import React from 'react'
import Loading from '../../../ui/Loading'
import Table from '../../../ui/Table'
import useUsers from '../useUsers'
import UserTableRow from './UserTableRow'

function UsersTable() {
  const {isLoading, users}= useUsers()
  
  if(isLoading) return <Loading/>
  return (
    <>
    <div className='bg-primary-900 p-5'>
      <div className='flex flex-row justify-between items-center'> 
        <h2> کاربران</h2>        
      </div>
      <div className='overflow-auto mt-2'>
        <Table>
            <Table.head>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">نام کاربر </th>
                <th scope="col" className="px-6 py-3">شماره تلفن</th>
                <th scope="col" className="px-6 py-3"> وضعیت کاربر</th>
                <th scope="col" className="px-6 py-3">نقش</th>
                <th scope="col" className="px-6 py-3">فعال</th>
                <th scope="col" className="px-6 py-3">عملیات</th> 
            </Table.head>
            <Table.body>
                {users && users.map((user, index)=>
                  <UserTableRow
                   key= {user._id}
                   user= {user}
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

export default UsersTable