import  {useState, useEffect} from 'react'
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';

const Auth = () => {
    const [signup, setSignup] = useState(false);
    useEffect(() => {
      console.log(signup)
    })

    return (
      <div className="w-screen h-screen bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center">
        {signup ?
          <Register setSignup={setSignup}></Register>
          :
          <Login setSignup={setSignup}></Login>
        }
  
      </div>
  
    )
}

export default Auth
