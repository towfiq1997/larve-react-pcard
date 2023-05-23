import React from 'react'
import { useDispatch } from 'react-redux'
import { setIncorDec, setRegiData, addSignPhone, setSignPhone, removePhone } from '../store/reducers/signupSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

const GetStarted = () => {
    const dispatch = useDispatch();
    const signup = useSelector((state) => state.signup)
    const addPhonesHandle = (e) => {
        e.stopPropagation();
        console.log("handle")
        const id = uuidv4();
        dispatch(addSignPhone({
            fieldId: id
        }));
    }


    const handleClick = () => {
        dispatch(setIncorDec('inc'));
    }
    return (
        <div className='font-Nunito'>
            <h1 className=' text-[21px] leading-[24px] mt-[10px] mb-[30px]'>Create your <span className='font-bold'>FREE </span>
                profile
            </h1>
            <div className='font-Outfit text-[16px] mb-[30px] text-black text-center w-full'>
                Already have  an account ? <Link to="/signin">Sign In</Link>
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
                            First and Last Name
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'name', val: e.target.value }))}
                            name="name"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your name"
                            value={signup.name}

                        />
                    </div>
                </div>
            </div>


            {
                signup.name == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Name is required</p>
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
                            Email
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'email', val: e.target.value }))}
                            name="dcdc"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your email"
                            value={signup.email}
                            autocomplete="off"
                        />
                    </div>
                </div>
            </div>

            {
                signup.email == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Email is required</p>
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
                            Phone
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'phone', val: e.target.value }))}
                            name="phone"
                            id="input-1"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="text"
                            placeholder="Enter your phone"
                            value={signup.phone}
                            required
                        />
                    </div>
                </div>
            </div>





            {
                signup.phone == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Phone is required</p>
            }

            {
                Array.isArray(signup.add_phones) && signup.add_phones.map((phone, index) => (
                    <div
                        key={index}
                        className="flex flex-col border rounded-lg border-[#D1D4E3] transition-all ease-in-out duration-220 bg-white cursor-pointer max-h-full w-full mb-[15px]"
                    >
                        <div className="flex select-none flex-row w-full py-2 px-4 justify-end border-b border-[#D1D4E3]">
                            <div className="flex-grow">
                                <label
                                    className="w-full transistion-all duration-220 ease-in-out cursor-pointer text-label text-primary-100"
                                    htmlFor="input-1"
                                >
                                    Extra Phone
                                </label>
                            </div>
                            <button className='font-semibold cursor-pointer text-slate-900' onClick={() => dispatch(removePhone(
                                {
                                    fieldId: phone.fieldId
                                }
                            ))}>Delete</button>
                        </div>
                        <div
                            className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                            style={{ height: 54 }}
                        >
                            <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                <input

                                    name={phone.fieldId}
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder="Enter extra phone"
                                    value={phone.fieldVal}
                                    onChange={(e) => dispatch(setSignPhone({
                                        fieldId: e.target.name,
                                        fieldVal: e.target.value
                                    }))}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                ))
            }



            <div className='flex items-center justify-center w-full my-5' onClick={addPhonesHandle}>
                <div className='flex justify-center items-center gap-2 rounded-lg bg-cyan-700 px-5 py-2 text-white cursor-pointer' >
                    <p>Addmore phone</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
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
                            Password
                        </label>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                    style={{ height: 54 }}
                >
                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                        <input
                            onChange={(e) => dispatch(setRegiData({ key: 'password', val: e.target.value }))}
                            name="password"
                            id="input-8"
                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                            type="password"
                            placeholder="Enter your password"
                            value={signup.password}
                            required
                        />
                    </div>
                </div>
            </div>

            {
                signup.password == "" && <p className='mb-4 font-semibold text-[#ff0000]'>Password is required</p>
            }

            <div className='step-navigation flex justify-end mt-[90px]'>

                {
                    (() => {
                        if (signup.name == "" || signup.email == "" || signup.phone == "" || signup.password == "")
                            return (
                                <div className='w-[250px] text-white bg-[#2a2a2b] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-not-allowed'>
                                    <p className='text-[18px]'>next</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            )
                        else
                            return (
                                <div onClick={handleClick} className='w-[250px] text-white bg-[#006dff] flex items-center justify-center gap-2 rounded-[10px] py-4 font-Nunito cursor-pointer'>
                                    <p className='text-[18px]'>next</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            )
                    })()
                }
            </div>

        </div>
    )
}

export default GetStarted