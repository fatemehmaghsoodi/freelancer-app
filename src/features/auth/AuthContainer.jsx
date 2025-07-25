import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import CheckOtp from './CheckOtp';
import SendOtp from './SendOtp';
// import SendOtpForm from './SendOtp';
import { getOTP } from '../../services/authServices';


function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const {isPending, isError, data, mutateAsync}= useMutation({
    mutationFn:getOTP
  })

  const sendOtpHandler= async(data)=>{
    
    try {
      const res = await mutateAsync(data)
      setOtpCode(res.message)
      setPhoneNumber(res.phoneNumber)
      setStep(2)
      
    } catch (error) {
      
    }
  }

  const renderStep= ()=>{
    switch (step) {
      case 1: return <SendOtp 
      step={step}
        onSendOtp={sendOtpHandler}
        phoneNumber={phoneNumber} 
        onChange={(e)=>setPhoneNumber(e.target.value)}
        />
      case 2: return <CheckOtp 
      step={step}
        onResendOtp={sendOtpHandler} 
        setStep={()=>setStep(1)} 
        otpCode={otpCode}
        phoneNumber={phoneNumber}
        />
      default:return null
    }
  }

  return (
    <>
      {renderStep()}  
    </>
    
  )
}

export default AuthContainer