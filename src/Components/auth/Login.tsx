import React, { useEffect, useRef } from 'react'
import OathBtns from './OathBtns'

const Login = (props: { setSignup: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleRegisterBtn = ():void => {
        props.setSignup(true);
    }

    useEffect(() => {
        ref.current?.classList.remove('fade-exit-active');
        ref.current?.classList.add('fade-enter');

        const timeout = setTimeout(() => {
            ref.current?.classList.remove('fade-enter');
            ref.current?.classList.add('fade-enter-active');
        }, 100);

        return () => {
            clearTimeout(timeout);
            ref.current?.classList.remove('fade-enter-active');
            ref.current?.classList.add('fade-exit-active');
        }
    })

    
    return (
        <div ref={ref} className='bg-blue-600 h-2/3 w-[54%] flex rounded-xl form-container form-container'>
            <form className='bg-white w-1/2 flex flex-col rounded-l-xl p-10 gap-5 items-center form-container'>
                <div className='text-4xl font-bold self-center p-5'>Login</div>
                <OathBtns></OathBtns>
                <div className='text-base font-semibold'>or use your account</div>
                <input className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full" type="text" name="email" placeholder='Email' />
                <input className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full" type="password" name="password" placeholder='Password' />
                <button type='button'>Forgot your password?</button>
                <button className="bg-blue-600 text-base text-slate-200 font-bold px-12 py-3 rounded-full hover:scale-110 hover:bg-blue-800 active:bg-blue-900" type="submit">LOGIN</button>
            </form>
            <div className=' w-1/2 rounded-r-xl flex flex-col justify-center items-center gap-2'>
                <div className='text-4xl font-bold text-slate-200 p-2'>Hello, Developer!</div>
                <div className='text-slate-200 text-center'>Dont have an account yet? <br /> Register below</div>
                <button className='bg-slate-200 p-2 px-6 rounded-full font-bold text-blue-600 m-4 hover:scale-110 hover:bg-slate-300' onClick={handleRegisterBtn}>Register</button>
            </div>
        </div>

    )
}

export default Login
