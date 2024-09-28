import React, { useRef, useEffect } from 'react'
import OathBtns from '../Components/OathBtns'

const Register = (props: { setSignup: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleLoginBtn = () => {
        props.setSignup(false);
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
        <div ref={ref} className='bg-blue-600 h-2/3 w-[54%] flex rounded-xl form-container '>
            <div className=' w-1/2 rounded-r-xl flex flex-col justify-center items-center gap-2'>
                <div className='text-4xl font-bold text-slate-200 p-2'>Welcome Back!</div>
                <div className='text-slate-200 text-center'>To keep connected with us please login<br />with your personal info </div>
                <button className='bg-slate-200 p-2 px-6 rounded-full font-bold text-blue-600 m-4 hover:scale-110 hover:bg-slate-300' onClick={handleLoginBtn}>Login</button>
            </div>
            <form className='bg-white w-1/2 flex flex-col rounded-r-xl p-10 gap-4 items-center form-container'>
                <div className='text-4xl font-bold self-center p-5'>Register</div>
                <OathBtns></OathBtns>
                <div className='text-base font-semibold'>or use email for registeration</div>
                <input className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full" type="text" name="name" placeholder='Name' />
                <input className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full" type="text" name="email" placeholder='Email' />
                <input className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full" type="password" name="password" placeholder='Password' />
                <button className="bg-blue-600 text-base text-slate-200 font-bold px-12 py-3 rounded-full hover:scale-110 hover:bg-blue-800 active:bg-blue-900" type="submit">LOGIN</button>
            </form>

        </div>
    )
}

export default Register
