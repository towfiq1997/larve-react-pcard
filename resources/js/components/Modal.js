import React, { useEffect, useRef, useState, useId } from 'react'
import ReactDOM from "react-dom"
import { closeModal } from './store/reducers/themeSlice';
import { v4 as uuidv4 } from "uuid";
import { addPhone, addEmail, addAddress, addLink } from './store/reducers/profileSlice';
import { useSelector, useDispatch } from 'react-redux';

const Phonemodal = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [label, setLabel] = useState('HOME');
    const [value, setValue] = useState('');

    console.log(profile)

    const id = uuidv4();
    const handleSubmit = () => {
        dispatch(addPhone({ label: label, fieldId: id, fieldVal: value }));
        dispatch(closeModal())
    }
    return (
        <div>
            <select onChange={(e) => setLabel(e.target.value)} className='w-full mb-3 p-3 border-2 border-gray-700'>
                <option value="MOBILE">Mobile</option>
                <option value="HOME">Home</option>
                <option value="WORK">Work</option>
                <option value="FAX">Fax</option>
            </select>
            <input onChange={(e) => setValue(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter phone' />

            <div onClick={handleSubmit} className='cursor-pointer flex justify-center items-center mx-2 bg-[#006dff] text-[16px] text-white font-Nunito h-[60px] rounded-[10px]'>
                Save
            </div>
        </div>
    )
}

const Emailmodal = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [label, setLabel] = useState('HOME');
    const [value, setValue] = useState('');

    console.log(profile)

    const id = uuidv4();
    const handleSubmit = () => {
        dispatch(addEmail({ label: label, fieldId: id, fieldVal: value }));
        dispatch(closeModal())
    }
    return (
        <div>
            <select onChange={(e) => setLabel(e.target.value)} className='w-full mb-3 p-3 border-2 border-gray-700'>
                <option value="HOME">Home</option>
                <option value="WORK">Work</option>
            </select>
            <input onChange={(e) => setValue(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter email' />

            <div onClick={handleSubmit} className='cursor-pointer flex justify-center items-center mx-2 bg-[#006dff] text-[16px] text-white font-Nunito h-[60px] rounded-[10px]'>
                Save
            </div>
        </div>
    )
}

const Addressmodal = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');

    console.log(profile)

    const id = uuidv4();
    const handleSubmit = () => {
        dispatch(addAddress({ label: label, fieldId: id, fieldVal: value }));
        dispatch(closeModal())
    }
    return (
        <div>
            <input onChange={(e) => setLabel(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter address type' />
            <input onChange={(e) => setValue(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter address' />

            <div onClick={handleSubmit} className='cursor-pointer flex justify-center items-center mx-2 bg-[#006dff] text-[16px] text-white font-Nunito h-[60px] rounded-[10px]'>
                Save
            </div>
        </div>
    )
}

const Linkmodal = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');

    console.log(profile)

    const id = uuidv4();
    const handleSubmit = () => {
        dispatch(addLink({ label: label, fieldId: id, fieldVal: value }));
        dispatch(closeModal())
    }
    return (
        <div>

            <input onChange={(e) => setLabel(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter link label' />
            <input onChange={(e) => setValue(e.target.value)} type='text' className='w-full border-2 border-gray-700 mb-3 p-3' placeholder='Enter link ' />

            <div onClick={handleSubmit} className='cursor-pointer flex justify-center items-center mx-2 bg-[#006dff] text-[16px] text-white font-Nunito h-[60px] rounded-[10px]'>
                Save
            </div>
        </div>

    )
}
const Modal = () => {
    const [phoneRender, setPhoneRender] = useState(false);
    const [emailRender, setEmailRender] = useState(false);
    const [linkRender, setLinkRender] = useState(false);
    const [addressRender, setAddressRender] = useState(false);
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            dispatch(closeModal())
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);
        return () => {
            document.removeEventListener("click", handleOutsideClick, true)
        }
    }, [])
    return ReactDOM.createPortal(
        <div ref={modalRef} className='md:w-[600px] w-auto transition-all shadow-lg border-4 border-[#D1D4E3]  bg-[#ffffff] text-black z-20 px-[30px] py-[40px]'>
            {
                phoneRender || emailRender || linkRender || addressRender ? (
                    <>
                        {
                            phoneRender && <Phonemodal />

                        }
                        {
                            emailRender && <Emailmodal />

                        }
                        {
                            addressRender && <Addressmodal />

                        }
                        {
                            linkRender && <Linkmodal />

                        }
                    </>
                ) : (
                    <>
                        <div className='text-center text-[21px]'>Add Contact Information</div>
                        <div onClick={() => setPhoneRender(true)} className='flex gap-4 items-center text-blue-800 my-3 py-2 border-b-2 border-blue-800 cursor-pointer'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg></span>
                            <span>Add Phone</span>
                        </div>
                        <div onClick={() => setEmailRender(true)} className='flex gap-4 items-center text-blue-800 my-3 py-2 border-b-2 border-blue-800 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </span>
                            <span>Add Email</span>
                        </div>
                        <div onClick={() => setAddressRender(true)} className='flex gap-4 items-center text-blue-800 my-3 py-2 border-b-2 border-blue-800 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </span>
                            <span>Add Location</span>
                        </div>
                        <div onClick={() => setLinkRender(true)} className='flex gap-4 items-center text-blue-800 my-3 py-2 border-b-2 border-blue-800 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                </svg>
                            </span>
                            <span>Add Links</span>
                        </div>
                    </>
                )
            }

        </div>
        , document.getElementById('pcard-modal'))
}

export default Modal