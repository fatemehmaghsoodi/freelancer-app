import AuthContainer from '../features/auth/AuthContainer';

function Auth() { 
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className="h-screen w-full blur-sm bg-[url('/src/assets/images/login.jpg')] bg-no-repeat bg-cover bg-center bg-fix"></div>
      <AuthContainer/>
   </div>
  )
}

export default Auth
