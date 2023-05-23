import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAddPhone, setSingleField, setAddLink, setAddEmail, setAddAddress, removeAddAddress, removeAddEmail, removeAddLink, removeAddPhone } from './store/reducers/profileSlice'
import { openModal } from './store/reducers/themeSlice'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Edit = () => {
    const profile = useSelector((state) => state.profile);
    const email = useSelector((state) => state.auth.email)
    const modalState = useSelector((state) => state.theme.editModal);
    const dispacth = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = async () => {
        const formdata = new FormData();
        formdata.append("name", profile.name)
        formdata.append("email", profile.email)
        formdata.append("phone", profile.phone)
        formdata.append("company", profile.company)
        formdata.append("location", profile.location)
        formdata.append("jobtitle", profile.jobtitle)
        formdata.append("add_phones", JSON.stringify(profile.add_phones))
        formdata.append("add_emails", JSON.stringify(profile.add_emails))
        formdata.append("add_addresses", JSON.stringify(profile.add_addresses))
        formdata.append("add_links", JSON.stringify(profile.add_links))
        formdata.append("emailcheck", email)

        const response = await fetch("/api/updateprofile", {
            method: "POST",
            body: formdata
        });
        const result = await response.json();
        if (result) {

            navigate("/profile");
        }

    }
    return (
        <div className='h-full w-full relative'>
            {modalState && <Modal />}
            <div className='w-full sticky top-0'>
                <div className='flex ml-8 md:ml-0  items-center text-[21px] mx-4 py-3 gap-6'>
                    <Link to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000f31" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Link>
                    <p>Edit Contact</p>
                </div>
            </div>

            <div className='h-full overflow-auto'>
                <div className='h-auto px-5 mb-[150px]'>
                    <div className='flex flex-col items-center justify-center mb-[35px]'>
                        <div

                            className="w-full h-full p-8 text-center flex flex-col justify-center items-center cursor-pointer rounded-xl border-dashed border-2 hover:bg-[#edf0ff] hover:border-[#006dff] transition-all duration-220 ease-in-out bg-white border-[#D1D4E3]"
                            style={{ minHeight: "8rem", maxWidth: "16rem", aspectRatio: "1 / 1" }}
                        >
                            <input

                                className='fileInput'
                                accept="image/*"
                                type="file"
                                autoComplete="off"
                                tabIndex={-1}
                                style={{ display: "none" }}
                            />

                            {
                                false ? (
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
                                    First Name & Last Name
                                </label>
                            </div>
                        </div>
                        <div
                            className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                            style={{ height: 54 }}
                        >
                            <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                <input
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="name"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.name}

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
                                    Phone Number
                                </label>
                            </div>
                        </div>
                        <div
                            className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                            style={{ height: 54 }}
                        >
                            <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                <input
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="phone"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.phone}

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
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="email"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.email}

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
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="jobtitle"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.jobtitle}

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
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="company"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.company}

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
                                    onChange={(e) => dispacth(setSingleField({ key: e.target.name, value: e.target.value }))}
                                    name="location"
                                    id="input-1"
                                    className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                    type="text"
                                    placeholder=""
                                    value={profile.location}

                                />
                            </div>
                        </div>
                    </div>

                    {
                        Array.isArray(profile.add_phones) && profile.add_phones.map((phone, index) => (
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
                                            Phone
                                        </label>
                                    </div>
                                    <button className='font-semibold cursor-pointer text-slate-900' onClick={() => dispacth(removeAddPhone({ fieldId: phone.fieldId }))}>Delete</button>
                                </div>
                                <div
                                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                                    style={{ height: 54 }}
                                >
                                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                        <input
                                            onChange={(e) => dispacth(setAddPhone({ fieldId: e.target.name, fieldVal: e.target.value }))}
                                            name={phone.fieldId}
                                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                            type="text"
                                            placeholder=""
                                            value={phone.fieldVal}

                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {
                        Array.isArray(profile.add_emails) && profile.add_emails.map((phone, index) => (
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
                                            Email
                                        </label>
                                    </div>
                                    <button className='font-semibold cursor-pointer text-slate-900' onClick={() => dispacth(removeAddEmail({ fieldId: phone.fieldId }))}>Delete</button>
                                </div>
                                <div
                                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                                    style={{ height: 54 }}
                                >
                                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                        <input
                                            onChange={(e) => dispacth(setAddEmail({ fieldId: e.target.name, fieldVal: e.target.value }))}
                                            name={phone.fieldId}
                                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                            type="text"
                                            placeholder=""
                                            value={phone.fieldVal}

                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {
                        Array.isArray(profile.add_addresses) && profile.add_addresses.map((phone, index) => (
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
                                            Address
                                        </label>
                                    </div>
                                    <button className='font-semibold cursor-pointer text-slate-900' onClick={() => dispacth(removeAddAddress({ fieldId: phone.fieldId }))}>Delete</button>
                                </div>
                                <div
                                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                                    style={{ height: 54 }}
                                >
                                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                        <input
                                            onChange={(e) => dispacth(setAddAddress({ fieldId: e.target.name, fieldVal: e.target.value }))}
                                            name={phone.fieldId}
                                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                            type="text"
                                            placeholder=""
                                            value={phone.fieldVal}

                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {
                        Array.isArray(profile.add_links) && profile.add_links.map((phone, index) => (
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
                                            Link
                                        </label>
                                    </div>
                                    <button className='font-semibold cursor-pointer text-slate-900' onClick={() => dispacth(removeAddLink({ fieldId: phone.fieldId }))}>Delete</button>
                                </div>
                                <div
                                    className="flex flex-row bg-white w-full divide-x divide-[#D1D4E3] rounded-lg"
                                    style={{ height: 54 }}
                                >
                                    <div className="flex-grow flex flex-row items-center rounded-bl-lg rounded-br-lg shadow-inner bg-gray">
                                        <input
                                            onChange={(e) => dispacth(setAddLink({ fieldId: e.target.name, fieldVal: e.target.value }))}
                                            name={phone.fieldId}
                                            className="w-full h-full bg-[#00000000] focus:outline-none px-4 rounded-b-lg"
                                            type="text"
                                            placeholder=""
                                            value={phone.fieldVal}

                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }




                    <div onClick={() => dispacth(openModal())} className='flex justify-center py-3 items-center bg-[#edf0ff] cursor-pointer'>
                        <span>
                            Add Contact Information
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full sticky bottom-0'>
                <div onClick={handleUpdate} className=' cursor-pointer flex justify-center items-center mx-2 bg-[#006dff] text-[16px] text-white font-Nunito h-[60px] rounded-[10px]'>
                    Save Changes
                </div>
            </div>
        </div>
    )
}

export default Edit