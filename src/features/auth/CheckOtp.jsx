import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import OtpInput from 'react-otp-input';
import { useNavigate, useNavigation } from 'react-router-dom';
import { checkOTP } from '../../services/authServices';
import logo from '../../assets/images/logo.svg'

function CheckOtp({phoneNumber,step, setStep, onResendOtp, otpCode}) {
  
    const [otp, setOtp] = useState('');
    const [time, setTime] = useState(10);
    const navigate = useNavigate()

    // useEffect(() => {
    //   const timer= time>0 && setInterval(()=>{
    //     setTime(time-1)
    //   }, 1000);
      
    //   return () => clearInterval(timer);
    // }, [time]);

    useEffect(() => {
      if (otpCode) setOtp(otpCode.toString());
      }, [otpCode]);

    const {isPending, data, mutateAsync}= useMutation({
      mutationFn:checkOTP
    })

    const checkOtpHandler= async()=>{
      try {
        const {user, message} =await mutateAsync({phoneNumber, otp})
        toast.success(message)
        if(!user.isActive) return navigate("/setting");
        if(user.status !== 2) {
          navigate('/')
          toast.error("پروفایل شما در انتظار تایید")
          return
        };
        if(user.role === "OWNER") return navigate("/owner");
        if(user.role === "FREELANCER") return navigate("/freelancer");

      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }

  return (
    <div className={`w-80 min-h-80 p-6 bg-primary-900 fixed flex-col rounded-md justify-center transform:${step===2 ? 'rotate(0)': ''} transition: 'transform 150ms ease'`} >

       <div className='flex gap-x-2'> 
          <img className='w-24' src={logo} alt="" /> 
          <h1 className='text-nowrap self-center text-primary-100 font-extrabold'>فریلنسر شاپ</h1>
        </div>
        <div className="my-4 text-2xl"><p>کد تایید</p></div>
        <OtpInput
            value={otp}
            containerStyle={{
              justifyContent:"center",
              display:"flex",
              flexDirection:'row-reverse'   
              }}
            inputStyle={{
             width:"2rem",
             height:"2rem",
             margin:"0 5px", 
             justifyContent:"center",         
            }}
            
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            />
            {/* <div className="mt-2 text-center text-xs">{ time > 0 
            ? <p>{time} ثانیه تا ارسال مجدد کد</p>
            : <button className=" " onClick={onResendOtp}>ارسال مجدد کد</button>} 
            </div> */}
        <button onClick={checkOtpHandler} className="btn btn--secondary mt-2 w-full">ارسال کد تایید</button>
        <button onClick={() =>setStep(1)} className="btn mt-2 border w-full"> &rarr; بازگشت</button>
    </div>
  )
}

export default CheckOtp