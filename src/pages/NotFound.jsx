import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import useMoveBack from '../hook/useMoveBack'

function NotFound() {
    const moveback =useMoveBack()

  return (
    <div className='h-screen bg-primary-800 flex justify-center items-center'>
        <div className=''>
            <h3>صفحه ای با این مشخصات یافت نشد</h3>
            <button className='flex gap-x-2 items-end' onClick={moveback}>
                <HiArrowRight/>
                <span>بازگشت</span>
            </button>
        </div>
    </div>
  )
}

export default NotFound