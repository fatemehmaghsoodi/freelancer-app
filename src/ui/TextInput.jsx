import React from 'react'

function TextInput({label,name,required, type="text", register,errors, validationSchema }) {
  return (
    <div className="flex flex-col">
        <label className="text-primary-light text-base">{label} {required && <span className="text-red-700">*</span>}</label>
        <input {...register(name, validationSchema)} 
        className="text-field"
        type={type} 
        id={name}
        />
        {errors && errors[name] && (<span className='text-red-700 text-xs mr-2 mt-2'>{errors[name]?.message}</span>)}
    </div>
  )
}

export default TextInput