import React from 'react'

function RadioInput({label,
    name,
    value,
    checked, 
    required,
    register,
    errors,
    watch,
    id,
    validationSchema }) {
  return (
    <div className="flex flex-col">
        <label className="text-primary-light">{label} {required && <span>*</span>}</label>
        <input 
        {...register(name, validationSchema)} 
        className="radio-filed" 
        type='radio'
        id={id}
        value={value}
        name={name}
        checked={watch(name) === value} 
       />
    </div>
  )}

export default RadioInput