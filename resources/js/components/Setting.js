import React from 'react'
import { useDispatch } from 'react-redux'
import { setEmpty } from './store/reducers/signupSlice'
import { setEmpty as authEmpty } from './store/reducers/authSlice'


const Setting = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setEmpty());
        dispatch(authEmpty())
    }
    return (
        <div onClick={handleLogout} className='flex justify-center items-center'>
            <button className=''>Sign Out</button>
        </div>
    )
}

export default Setting