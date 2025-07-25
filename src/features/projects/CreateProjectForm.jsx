import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import DatePicker from 'react-multi-date-picker';
import { TagsInput } from 'react-tag-input-component';
import SelectInput from '../../ui/SelectInput';
import TextInput from '../../ui/TextInput';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import useGetCategory from '../../hook/useGetCategory';
import useCreateProject from './useCreateProject';
import Loading from '../../ui/Loading';
import useEditProject from './useEditProject';

function CreateProjectForm({onClose, projectToEdit= {}}) {
   const {_id: editId}= projectToEdit 
   const isEditSession= Boolean(editId)
   const {
       title,
       description,
       budget, 
       category, 
       deadline,
       tags:prevTags } = projectToEdit

   let editValues={}
   if(isEditSession){
     editValues={
        title,
        description,
        budget,
        category:category._id 
    }
   }

   const {createProject, isCreating}= useCreateProject()
   const {isEditing, editProject}= useEditProject()
   const [value, setValue] = useState(deadline || new Date());
   const [tags, setTags]= useState(prevTags || []);
   const {categories}= useGetCategory()

   const{
    register,
    formState: { errors },
    handleSubmit,
    reset
   } = useForm({
    defaultValues:editValues,
    mode:"onChange"
    })

   const onSubmit= (data)=>{
       const newProject={
           ...data,
           tags,
           deadline:new Date(value).toISOString()
       }
       if(isEditSession){
        editProject({id: editId, newProject}, {
            onSuccess:()=> {
                 onClose();
                 reset()
             }
         })
       }else{
        createProject(newProject, {
            onSuccess:()=> {
                 onClose();
                 reset()
             }
         })
       }
   };

  return (
    <div className='mt-4 px-3 text-right' >
        <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <TextInput 
            label="عنوان"
            name="title"
            register={register}
            required
            validationSchema={{
                required:"فیلد ضروری است",
                minLength: {
                    value:3,
                    message:"طول عنوان کمتر از 3 کاراکتر نباشد"
                }
            }}
            errors={errors}
            />
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
            label="بودجه"
            name="budget"
            register={register}
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
            type= "text"
            errors={errors}
            />
            <SelectInput
                label="دسته بندی"
                name="category"
                required
                register={register}
                options={categories}
            />
            <div>
            <label>تگ ها</label>
            <TagsInput
                value={tags}
                onChange={setTags}
                name="tags"
            />
            </div>
            <div>
            <label htmlFor="">ددلاین پروژه</label>
            <DatePicker 
            placeholder={value}
                containerClassName='w-full'
                inputClass='text-field'
                value={value} 
                locale={persian_fa}
                onChange={setValue}
               style={{display:"block"}}
               calendar={persian}
               format="YYYY/MM/DD"
               calendarPosition="bottom-right"
               required= {true}
            />
            </div>
            {isCreating
            ? <button className="btn btn--primary mt-3"><Loading/></button>
            :<button type='submit' className="btn btn--secondary mt-3"> ارسال</button>
            }
        </form>
    </div>
  )
}

export default CreateProjectForm