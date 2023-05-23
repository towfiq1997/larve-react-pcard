import React from 'react'
import { signupsteps } from './settings/SignupSteps'
import { useSelector } from 'react-redux'
//import GetStarted from './signCom/getStarted';
import GetStarted from './signCom/GetStarted';
import ProfilePicture from './signCom/profilePicture';
import AboutMe from './signCom/aboutMe';
import { Link } from 'react-router-dom';

function Signup() {
    const currentstep = useSelector((state) => state.signup.step);

    const RenderStep = () => {
        if (currentstep == 1) {
            return <GetStarted />
        } else if (currentstep == 2) {
            return <ProfilePicture />
        }
        else if (currentstep == 3) {
            return <AboutMe />
        }
    }
    return (
        <div className='container font-Outfit max-h-screen'>
            <div className="flex  h-full ">
                <div className="hidden md:block w-[288px] bottom-2 border-r-2 border-grey fixed top-0">
                    {/* <h1 className='font-bold text-[40px] w-full text-center my-4'>Pcard</h1> */}
                    <Link to="/signup">
                        <div className='flex w-full items-center justify-center'>
                            <img src="/public/images/pcard.png" alt="hhk" height="130px" width="130px" />
                        </div>
                    </Link>


                    {
                        signupsteps.map((step, index) => (
                            <div
                                key={index}
                                className={index + 1 == currentstep ? 'w-full pl-8 text-[#119f00] font-semibold my-2 relative' : 'w-full pl-8 text-[#646984] my-2 relative'}>
                                <div className="p-4 w-[13rem] bg-white hover:bg-[#f6f8ff] relative">
                                    <p>{step.title}</p>
                                    {
                                        index + 1 == currentstep ? (
                                            <div className="absolute right-0 top-1/2 translate-y-[-50%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#119f00" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                </svg>
                                            </div>
                                        ) : ''
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:w-auto'>
                    {/* code injection */}

                    {/* CODE END */}
                    <div className="md:ml-[370px] ml-0 md:w-[405px] w-auto m-auto  h-auto">
                        <a className='w-full flex  items-center justify-center md:hidden' href="/#/signup">
                            <img src="/public/images/pcard.png" alt="hhk" height="130px" width="130px" />
                        </a>
                        <RenderStep />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup