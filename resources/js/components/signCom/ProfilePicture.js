import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncorDec, setRegiData } from '../store/reducers/signupSlice'

const ProfilePicture = () => {
    const dispatch = useDispatch();
    const signup = useSelector((state) => state.signup)

    const fileinp = useRef(null);
    return (
        <>
            <h1 className='font-Nunito text-[21px] leading-[24px] mt-[15px] mb-[40px]'>Add Your Picture
            </h1>
            <div className='flex flex-col items-center justify-center'>
                <div
                    onClick={() => fileinp.current.click()}
                    className="w-full h-full p-8 text-center flex flex-col justify-center items-center cursor-pointer rounded-xl border-dashed border-2 hover:bg-[#edf0ff] hover:border-[#006dff] transition-all duration-220 ease-in-out bg-white border-[#D1D4E3]"
                    style={{ minHeight: "8rem", maxWidth: "16rem", aspectRatio: "1 / 1" }}
                >
                    <input
                        onChange={(e) => dispatch(setRegiData({ key: 'profilepic', val: e.target.files[0] }))}
                        ref={fileinp}
                        className='fileInput'
                        accept="image/*"
                        type="file"
                        autoComplete="off"
                        tabIndex={-1}
                        style={{ display: "none" }}
                    />

                    {
                        signup.profilepic ? (
                            <img src={URL.createObjectURL(signup.profilepic)} height="80px" width="80px" />
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#006DFF" className="bi bi-card-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                </svg>
                                <span className="text-[#006DFF]">Add an Image</span>
                            </>
                        )
                    }

                </div>
                {
                    !signup.profilepic && <p onClick={() => dispatch(setIncorDec("inc"))} className='text-[#646984] mt-[40px] text-[18px] cursor-pointer'>skip for now</p>
                }
            </div>

            <div className='step-navigation flex justify-between mt-[90px]'>
                <div onClick={() => dispatch(setIncorDec("dec"))} className='w-auto text-[#646984] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <p className='text-[18px]'>back</p>
                </div>
                <div onClick={() => dispatch(setIncorDec("inc"))} className='w-[250px] text-white bg-[#006dff] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                    <p className='text-[18px]'>next</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ProfilePicture