import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { HiArchive } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import RadioInput from '../../ui/RadioInput';
import useCompliteProfile from './useCompleteProfile';
import TextInput from '../../ui/TextInput';

function CompleteProfileForm() {
  const navigate= useNavigate()
  const {isLoading, compliteProfile}= useCompliteProfile()
   const {
    register,
    formState:{errors},
    handleSubmit,
    watch
   }= useForm({
    mode:'onChange'
   })

   const onSubmitButton =(data)=>{
    compliteProfile(data, {
      onSuccess:(data)=>{
        const user= data.user
      if(user.status !== 2) {
        navigate('/')
        toast.error("پروفایل شما در انتظار تایید")
        return
      };
      if(user.role === "OWNER") return navigate("/owner");
      if(user.role === "FREELANCER") return navigate("/freelancer");
    }})
   }
  return (
    <div className='flex justify-center px-3 text-right' >
    <form className="w-80 space-y-3" onSubmit={handleSubmit(onSubmitButton)}>
       <TextInput 
            label="نام کاربری"
            name="name"
            register={register}
            required
            validationSchema={{
                required:"فیلد ضروری است",
                minLength: {
                  value: 5,
                  message: "طول نام کاربری حداقل 5 کاراکتر باشد",
                },
            }}
            errors={errors}
            />
        
        <TextInput
         label="ایمیل"
         name= "email"
         required
         register={register}
         validationSchema={{
          required:"فیلد ضروری است",
          pattern: {
            value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "فرمت ایمیل نامعتبر است",
          }
      }}
      errors={errors}
        />
        <div>
          <div className='flex gap-x-5 justify-center '>
          <RadioInput
          register={register}
          label="کارفرما"
          value="OWNER"
          name="role"
          id="OWNER"
          errors={errors}
          watch={watch} 
          checked={watch("role") === "OWNER"}
          validationSchema={{
            required:"فیلد ضرروری است",
          }}
          />
          <RadioInput
          register={register}
          label="فریلنسر"
          value="FREELANCER"
          id="FREELANCER"
          name="role"
          watch={watch}
          validationSchema={{
            required:"فیلد ضرروری است"
          }}
          checked={watch("role") === "FREELANCER"}
          errors={errors}
          />
          </div>
          <div className='text-center'>
            {errors && errors["role"] && (<span className='text-red-900'>{errors["role"]?.message}</span>)}
          </div>

        </div>
        
        <button type='submit' className="btn btn--secondary mt-3"> ارسال</button>
    </form>
    </div>
  )
}

export default CompleteProfileForm