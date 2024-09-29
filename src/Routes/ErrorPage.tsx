import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error: any = useRouteError();

  return (
    <div className='h-screen w-screen flex flex-col gap-10 justify-center items-center bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900'>
      <h1 className="text-9xl font-extrabold text-slate-200">Oops!</h1>
      <p className='text-slate-200 text-2xl'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-slate-200 text-xl">{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
