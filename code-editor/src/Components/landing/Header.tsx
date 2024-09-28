import React from 'react';


const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 p-4 form-container border border-slate-800'>
            <div className='text-4xl font-bold text-slate-200 p-2'>Code-Sync</div>
            {/* <a className='w-10 overflow-hidden'>
                <svg className='fill-slate-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
            </a> */}
            <a className='w-8 overflow-hidden'>
                <svg className='fill-slate-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
            </a>
        </div>
    )
}

export default Header
