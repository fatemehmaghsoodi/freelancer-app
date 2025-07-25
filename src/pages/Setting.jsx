import React from 'react'
import CompleteProfileForm from '../features/auth/CompleteProfileForm'

function Setting() {
  return (
    <div className='h-screen bg-primary-800 flex justify-center items-center'>
      <div className='max-[640px]:w-full sm:w-3/5 lg:w-2/5'>
      <div className='bg-transeparent border-b-2 border-secondary-900 h-10 w-1/5  md:w-2/5 text-center'>
          <span className='text-nowrap'>تکمیل اطلاعات</span>
      </div>
      <div className='bg-primary-900 py-8'>
         <CompleteProfileForm/>
      </div>
      </div>
    </div>
  )
}

export default Setting