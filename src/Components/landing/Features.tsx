
const Features = () => {
  return (
    <div className=' w-full h-1/2 flex flex-col justify-center gap-2 items-center border border-slate-700'>
      <div className='text-4xl font-bold text-slate-200 p-4'>Features</div>
      <div className='flex justify-between p-4 '>
        <div className='text-slate-200 text-lg text-center w-1/3 p-6'>Syntax highlighting for multiple languages</div>
        <div className='text-slate-200 text-lg text-center w-1/3 p-6'>Code completion and suggestions</div>
        <div className='text-slate-200 text-lg text-center w-1/3 p-6'>Project management tools</div>
      </div>
    </div>
  )
}

export default Features
