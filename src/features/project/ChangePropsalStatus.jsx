import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import SelectInput from '../../ui/SelectInput'
import { statusOptions } from '../../utils/StatusOptions'
import useChangeProposalStatus from './useChangeProposalStatus'

function ChangeProposalStatus({proposalId, onClose}) {
  const {id:projectId}= useParams()
  const {register, handleSubmit}= useForm()
  const {isUpdating, changeProposalStatus}= useChangeProposalStatus()
  const queryClient= useQueryClient()

  const onSubmit=(data)=>{
    changeProposalStatus({id:proposalId, data},
      {onSuccess:(data)=>{
        onClose();
        queryClient.invalidateQueries({
        queryKey:['project', projectId]
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
        تغییر وضعیت درخواست
      </button>
      </form>
   
  )
}

export default ChangeProposalStatus