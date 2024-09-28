import React, { useEffect } from 'react'
import './index.css';
import Login from './Routes/Login';
import Register from './Routes/Register';
//@ts-ignore
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const [signup, setSignup] = React.useState(false);
  useEffect(() => {
    console.log(signup)
  })
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-center">
      {signup ?
        <Register setSignup={setSignup}></Register>
        :
        <Login setSignup={setSignup}></Login>
      }

    </div>

  )
}

export default App
