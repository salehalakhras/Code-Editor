import Header from '../Components/landing/Header'
import Hero from '../Components/landing/Hero'
import Benefits from '../Components/landing/Benefits'
import Features from '../Components/landing/Features'
import Description from '../Components/landing/Description'

const Landing = () => {
    return (
        <div className='w-screen h-auto bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900 grid grid-rows-3 grid-cols-1'>
            <div className='h-screen flex flex-col justify-between'>
                <Header></Header>
                <Hero></Hero>
            </div>
            <div>
                <Description></Description>
                <Features></Features>
            </div>
            <Benefits></Benefits>
        </div>
    )
}

export default Landing
