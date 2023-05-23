import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth.token == "") {
            navigate("/profile");
        }
    })
    return (
        <div className='font-Lato h-screen w-full flex justify-center items-center'>
            <div className='w-[380px]'>
                <h2 className='font-bold text-[30px]'>Build your page</h2>
                <p>
                    Add a photo, contact info, your social profiles, all the basics in one place. Then get creative with call to action buttons, and tell your story in an about me section.
                </p>
                <Link to="/signup" >
                    <button className='mt-4 mb-3 w-full text-center bg-blue-700 text-white py-3 text-[20px] rounded-lg'>Get started</button>
                </Link>

                <Link to="/signin">
                    <button className='border-black border-2 mb-1 w-full text-center  text-blue bg-gray-100 py-3 text-[20px] rounded-lg'>Sign in</button>
                </Link>

            </div>
        </div>
    )
}

export default Welcome