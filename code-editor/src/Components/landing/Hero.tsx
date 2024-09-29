
const Hero = () => {
    const handleGetStartedBtn = (): void => {
        window.location.href = '/auth';
    }

    return (
        <div className='w-full flex items-center justify-around p-4 h-5/6'>
            <div className='w-1/2 flex flex-col justify-center gap-2'>
                <div className='text-5xl font-bold text-slate-200'>Welcome to Code-Sync!</div>
                <div className='text-slate-200 text-xl'>Real-time code editing and collaboration for teams of all sizes.</div>
                <button className=' w-1/3 bg-slate-200 p-2 px-6 rounded-full font-bold border border-slate-900 text-slate-900 m-4 hover:scale-110 hover:bg-slate-300' onClick={handleGetStartedBtn}>Start Collaborating</button>
            </div>
            <div className='w-1/3 h-3/4 bg-slate-700 rounded-lg'>
            </div>
        </div>
    )
}

export default Hero
