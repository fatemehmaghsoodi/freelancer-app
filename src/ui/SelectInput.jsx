import React from 'react'

function SelectInput({register, name, label, required, options}) {
  return (
      <div className='text-right'>  
        <label htmlFor={name}>{label} {required && <span className='text-error'> *</span>}</label>
        <select className='block w-full mt-2 h-10 px-2 rounded-2xl bg-primary-900 border focus-visible:outline-none' id={name} {...register(name)}>
            {options?.map((item)=>(
                <option value={item.value} key={item.value}>{item.label}</option>
            ))}
            
        </select>
      </div>
  )
}

export default SelectInput