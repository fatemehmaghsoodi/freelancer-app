import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import SelectInput from '../../../ui/SelectInput'
import { statusOptions } from '../../../utils/StatusOptions'
import useChangeUserStatus from './useChangeUserStatus'


function ChangeUserStatus({userId, onClose}) {
//   const {id:userId}= useParams()
  const {register, handleSubmit}= useForm()
  const {isUpdating, changeUserStatus}= useChangeUserStatus()
  const queryClient= useQueryClient()

  const onSubmit=(data)=>{
    changeUserStatus({id:userId, data},
      {onSuccess:(data)=>{
        onClose();
        queryClient.invalidateQueries({
        queryKey:['users']
        })}
    })
  }
  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
      <SelectInput
          label="تغییر وضعیت"
          name="status"
          required
          register={register}
          options={statusOptions}
      />
      <button
       className='btn btn--secondary'
       type="submit">
        تغییر وضعیت کاربر
      </button>
      </form>
   
  )
}

export default ChangeUserStatus