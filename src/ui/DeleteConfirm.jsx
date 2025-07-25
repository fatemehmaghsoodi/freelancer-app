import React from 'react'

function DeleteConfirm({onClose, item, onConfirm}) {
 
  return (
    <div className='mt-5'>
      <p>{`آیا مایل به حذف" ${item}" هستید ؟`}</p>
      <div className='flex gap-x-2 mt-4 items-center justify-center'>
        
        <button className='btn-sm btn--secondary' onClick={onConfirm}>تایید</button>
        <button className='btn-sm btn--secondary-outLine' onClick={onClose}>لغو</button>
      </div> 
    </div>
  )
}

export default DeleteConfirm