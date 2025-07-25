import React from 'react'
import { useForm } from 'react-hook-form';
import TextInput from '../../ui/TextInput';
import logo from '../../assets/images/logo.svg'

function SendOtp({onSendOtp, step, onChange}) {
  const {
   register,
   handleSubmit,
   formState:{errors}
  }= useForm({
    mode:'onChange'
  })

  return (
    
    <div className={`w-80 min-h-80 p-6 bg-primary-900 rounded-md fixed flex-col justify-center `} >
        <div className='flex gap-x-2'> 
          <img className='w-24' src={logo} alt="" /> 
          <h1 className='text-nowrap self-center text-primary-100 font-extrabold'>فریلنسر شاپ</h1>
        </div>
        <div className="my-4 text-2xl"><p>ورود</p></div>
        <div>
          <form onSubmit={handleSubmit(onSendOtp)}>
            <TextInput 
                label="شماره موبایل"
                register={register}
                name="phoneNumber"
                placeholder="Enter phone"
               required
            validationSchema={{
                required:"فیلد اجباری است",
                pattern: {
                    value:/^09\d{9}$/,
                    message:"شماره موبایل معتبر نیست"
                }
            }}
            errors={errors}
            />
            <button type='submit' className="btn btn--secondary mt-4 w-full">ورود</button>
          </form>
        </div>
    </div>
  )
}

export default SendOtp
