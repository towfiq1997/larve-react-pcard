import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, Navigate, useNavigate } from 'react-router-dom'
import { privateroutes } from "./settings/privteroutes"
import { useSelector } from 'react-redux';
import Diolog from './Diolog';
import { useDispatch } from 'react-redux';
import { openDiolog } from './store/reducers/themeSlice';

function RouteCheck() {
    const loction = useLocation();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        if (auth.token == "") {
            navigate("/welcome");
        }
    })

    return (
        <div className='container font-Outfit h-screen overflow-hidden'>
            <div className="flex h-full relative">
                {/* <button onClick={() => dispatch(openDiolog())} className='absolute top-0 z-50'>Click</button> */}
                <div onClick={() => dispatch(openDiolog())} className='md:hidden absolute top-4 z-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div className="w-[288px] md:block hidden bottom-2 border-r-2 border-grey">
                    <Link to="/profile">
                        <div className='flex items-center justify-center'>
                            <img src="/public/images/pcard.png" alt="hhk" height="130px" width="130px" />
                        </div>

                    </Link>
                    {
                        privateroutes.map((step, index) => (
                            <Link to={`/${step.slug}`} key={index}>
                                <div
                                    key={index}
                                    className={step.slug == loction.pathname.replace("/", "") ? 'w-full pl-8 text-[#119f00] font-semibold my-2 relative' : 'w-full pl-8 text-[#646984] my-2 relative'}>
                                    <div className="p-4 w-[13rem] bg-white hover:bg-[#f6f8ff] relative">
                                        <p>{step.title}</p>
                                        {
                                            step.slug == loction.pathname.replace("/", "") ? (
                                                <div className="absolute right-0 top-1/2 translate-y-[-50%]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#119f00" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                    </svg>
                                                </div>
                                            ) : ''
                                        }

                                    </div>
                                </div>
                            </Link>

                        ))
                    }
                </div>
                <Diolog />
                <div className='md:w-[650px] w-full h-full relative'>
                    {/* <div className='h-[4000px] mt-[100px`]'>
                    </div> */}
                    <Outlet />

                </div>

            </div>
        </div>
    )
}

export default RouteCheck