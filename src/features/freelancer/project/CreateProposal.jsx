import React from 'react'
import { useForm } from 'react-hook-form'
import Loading from '../../../ui/Loading'
import TextInput from '../../../ui/TextInput'
import useCreateProposal from './useCreateProposal'

function CreateProposal({onClose, projectId}) {
    const {isCreating, createProposal}= useCreateProposal()
    const {
        register,
        handleSubmit,
        formState: { errors },
        rest
    }= useForm({
        mode:'onChange'
    })

    const onSubmit =(data)=>{
        const newData= {...data, projectId}
        createProposal(newData,
            {onSuccess:()=> onClose()})
    }
  return (
    <div className='mt-4 px-3 text-right' >
        <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <TextInput 
            label="توضیحات"
            name="description"
            register={register}
            required
            validationSchema={{
                required:"فیلد ضروری است",
                minLength: {
                    value:10,
                    message:"طول عنوان کمتر از 10 کاراکتر نباشد"
                }
            }}
            errors={errors}
            />
            <TextInput 
            label="قیمت"
            name="price"
            register={register}
            type= "text"
            required
            validationSchema={{
                required:"فیلد ضروری است",
                validate:(value)=>{
                    if (!/^\d+$/.test(value)) {
                    return "فقط عدد وارد کن";
                    }
                    if (parseInt(value, 10) < 100000) {
                    return "حداقل مبلغ باید ۱۰۰٬۰۰۰ تومان باشد";
                    }
                    return true;
                }
            }}
            errors={errors}
            />
            <TextInput 
            label="مدت زمان"
            name="duration"
            register={register}
            type= "number"
            required
            validationSchema={{
                required:"فیلد ضروری است",
            }}
            errors={errors}
            />
            
            {isCreating
            ?<button className='btn btn--secondary' type="submit">ارسال</button>
            :<Loading/>
            }
           
        </form>
    </div>
  )
}

export default CreateProposal