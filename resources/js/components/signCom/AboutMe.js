import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncorDec, setRegiData } from '../store/reducers/signupSlice'
import { setAuth } from '../store/reducers/authSlice'
import { useNavigate } from 'react-router-dom'

const AboutMe = () => {
    const signup = useSelector((state) => state.signup);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const formdata = new FormData();
        formdata.append('name', signup.name);
        formdata.append('email', signup.email);
        formdata.append('password', signup.password);
        formdata.append('jobtitle', signup.jobtitle);
        formdata.append('company', signup.company);
        formdata.append('location', signup.location);
        formdata.append('phone', signup.phone);
        formdata.append('add_phones', JSON.stringify(signup.add_phones));
        formdata.append('profilepicture', signup.profilepic);

        const response = await fetch("/api/addcustomer", {
            method: 'POST',
            body: formdata

        });

        const result = await response.json();
        if (result.status) {
            dispatch(setAuth({ email: result.email, token: result.token }));
            navigate("/profile");
        }
    }
    return (
        <>
            <div className='flex justify-between items-center mt-[20px] mb-[30px]'>
                <h1 className=' text-[21px] leading-[24px] '>
                    About You
                </h1>
                <p onClick={handleSubmit} className='text-[#646984] cursor-pointer'>skip for now</p>
            </div>
            <div
                className="flex flex-col border rounded-lg border-[#D1D4E3] transition-all ease-in-out duration-220 bg-white cursor-pointer max-h-full w-full mb-[15px]"
            >
                <div className="flex select-none flex-row w-full py-2 px-4 justify-end border-b border-[#D1D4E3]">
                    <div className="flex-grow">
                        <label
                            className="w-full transistion-all duration-220 ease-in-out cursor-pointer text-label text-primary-100"
                            htmlFor="input-1"
                        >
                            Job Title
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'jobtitle', val: e.target.value }))}
                            name="jobtitle"
                            id="input-1"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your job title"
                            value={signup.jobtitle}
                        />
                    </div>
                </div>
            </div>
            {
                signup.jobtitle == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Jobtitle is required</p>
            }
            <div
                className="flex flex-col border rounded-lg border-[#D1D4E3] transition-all ease-in-out duration-220 bg-white cursor-pointer max-h-full w-full mb-[15px]"
            >
                <div className="flex select-none flex-row w-full py-2 px-4 justify-end border-b border-[#D1D4E3]">
                    <div className="flex-grow">
                        <label
                            className="w-full transistion-all duration-220 ease-in-out cursor-pointer text-label text-primary-100"
                            htmlFor="input-1"
                        >
                            Organization/Company
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'company', val: e.target.value }))}
                            name="company"
                            id="input-1"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your company"
                            value={signup.company}
                        />
                    </div>
                </div>
            </div>
            {
                signup.company == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Company is required</p>
            }
            <div
                className="flex flex-col border rounded-lg border-[#D1D4E3] transition-all ease-in-out duration-220 bg-white cursor-pointer max-h-full w-full mb-[15px]"
            >
                <div className="flex select-none flex-row w-full py-2 px-4 justify-end border-b border-[#D1D4E3]">
                    <div className="flex-grow">
                        <label
                            className="w-full transistion-all duration-220 ease-in-out cursor-pointer text-label text-primary-100"
                            htmlFor="input-1"
                        >
                            Location
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'location', val: e.target.value }))}
                            name="location"
                            id="input-1"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your loaction"
                            value={signup.location}
                        />
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col border rounded-lg border-[#D1D4E3] transition-all ease-in-out duration-220 bg-white cursor-pointer max-h-full w-full mb-[15px]"
            >
                <div className="flex select-none flex-row w-full py-2 px-4 justify-end border-b border-[#D1D4E3]">
                    <div className="flex-grow">
                        <label
                            className="w-full transistion-all duration-220 ease-in-out cursor-pointer text-label text-primary-100"
                            htmlFor="input-1"
                        >
                            Industry
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'industry', val: e.target.value }))}
                            name="industry"
                            id="input-1"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your industry"
                            value={signup.industry}
                        />
                    </div>
                </div>
            </div>


            <div className='step-navigation flex justify-between mt-[90px] mb-[30px]'>
                <div onClick={() => dispatch(setIncorDec("dec"))} className='w-auto text-[#646984] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <p className='text-[18px]'>back</p>
                </div>


                {
                    (() => {
                        if (signup.jobtitle == "" || signup.company == "")
                            return (
                                <div className='w-[250px] text-white bg-[#2a2a2b] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-not-allowed'>
                                    <p className='text-[18px]'>Submit</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            )
                        else
                            return (
                                <div onClick={handleSubmit} className='w-[250px] text-white bg-[#006dff] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                                    <p className='text-[18px]'>Submit</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            )
                    })()
                }
                {/* <div onClick={handleSubmit} className='w-[250px] text-white bg-[#006dff] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                    <p className='text-[18px]'>Submit</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div> */}
            </div>
        </>


    )
}

export default AboutMe