import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import image from './Constants/image';

function Login() {
  const loginref = useRef();
  const signupref = useRef();

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Link to='/' className='absolute block comfortaa text-4xl p-4'>Trendrent.</Link>
      <div className="flex w-[100vw] h-[100vh]">
        <div className="md:flex hidden flex-1 w-full h-full">
          <img src={image.mainimage} alt="" className='h-full object-cover' />
        </div>
        <div className="flex-1 flex-col px-8 h-full items-center justify-center flex">
          <div className="my-6 p-2 bg-[#D7D0FF] -z-2 w-full rounded-full flex comfortaa text-center">
            <button
              className={`flex-1 py-2 rounded-full cursor-pointer ${isLogin ? "bg-white shadow-lg" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 rounded-full cursor-pointer ${!isLogin ? "bg-white shadow-lg" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          <div className="rounded-3xl bg-[#D7D0FF] p-4 py-6 w-full max-w-[600px]">
            <h1 className='comfortaa font-extrabold text-[45px] text-center'>{isLogin ? 'Login' : 'Signup'}</h1>
            <p className='comfortaa text-center text-slate-700'>{isLogin ? 'We missed you' : 'Join us'}</p>
            <form ref={isLogin ? loginref : signupref} className='mt-8 flex flex-col'>
              {!isLogin && (
                <>
                  <span className='comfortaa mx-4 my-1 mt-4'>Your Name</span>
                  <input type="name" name='name' required className='bg-[#B0A4FF] rounded-xl py-2 px-4 mb-3 comfortaa placeholder:text-black outline-none border-none min-w-[250px] flex-1' placeholder='Enter your name' />
                </>
              )}
              <span className='comfortaa mx-4 my-1'>Your Email</span>
              <input type="email" name='email' className='bg-[#B0A4FF] rounded-xl py-2 px-4 comfortaa placeholder:text-black outline-none border-none min-w-[250px] flex-1' placeholder='Enter your email' required />
              <span className='comfortaa mx-4 my-1 mt-4'>Your Password</span>
              <input type="password" name='password' required className='bg-[#B0A4FF] rounded-xl py-2 px-4 comfortaa placeholder:text-black outline-none border-none min-w-[250px] flex-1' placeholder='Enter your password' />
              <button className='bg-[#D9D9D9] py-2 px-8 mt-4 rounded-xl self-center cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
