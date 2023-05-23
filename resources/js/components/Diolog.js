import React, { useRef, useEffect } from 'react'
import ReactDOM from "react-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { newcloseModal } from './store/reducers/themeSlice'
import { privateroutes } from './settings/privteroutes'

const Diolog = () => {
    const loction = useLocation();
    const clickref = useRef(null);
    const dispatch = useDispatch();
    const diolog = useSelector((state) => state.theme.diologModal)

    const closeDiolog = (e) => {
        if (clickref.current && !clickref.current.contains(e.target)) {
            dispatch(newcloseModal())
        }
    }
    useEffect(() => {
        document.addEventListener("click", closeDiolog, true);
        return () => {
            document.removeEventListener("click", closeDiolog, true)
        }
    }, [])

    return ReactDOM.createPortal(
        <div
            ref={clickref}
            className={diolog ? `bg-white border-r-2 border-[#eae7e7]  absolute top-0 left-0 h-full w-[50%] text-white transition-all z-[100] md:hidden` : `bg-white absolute top-0 left-0 h-full w-[0px] text-white transition-all overflow-hidden md:hidden`}
        >

            <div className='flex h-full flex-col w-full'>
                <Link to="/profile">
                    <div className='flex items-center justify-center'>
                        <img src="/public/images/pcard.png" alt="hhk" height="130px" width="130px" />
                    </div>

                </Link>
                {
                    privateroutes.map((step, index) => (
                        <Link to={`/${step.slug}`} key={index}>
                            <div className='text-black font-Outfit font-semibold p-4 pl-6'>
                                <p>{step.title}</p>
                            </div>

                        </Link>

                    ))
                }
            </div>
        </div>
        , document.getElementById('left-diolog'))
}

export default Diolog;
