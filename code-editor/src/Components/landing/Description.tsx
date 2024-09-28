import React from 'react'

const Description = () => {
    return (
        <div className='w-full h-1/2 flex flex-col items-center justify-around bg-slate-700/50 p-4 pb-10'>
            <div className='text-4xl font-bold text-slate-200 p-4'>Overview</div>
            <div className=' text-slate-200 text-xl text-center'>
                Welcome to CodeSync, a cutting-edge collaborative online compiler designed to empower developers and students alike. Our web-based platform enables multiple users to write, edit, and execute code in real time, fostering teamwork and enhancing coding skills. Built primarily with Java, this project emphasizes robust back-end development and incorporates advanced software engineering principles. Users can enjoy seamless live updates through WebSockets or refresh manually via HTTP, ensuring flexibility in their coding experience. With a strong focus on clean code, concurrency, scalability, security, and DevOps practices, CodeSync is the ideal environment for collaborative coding and learning.
            </div>
        </div>

    )
}

export default Description
