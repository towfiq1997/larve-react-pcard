import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProfileView = () => {

    const { id } = useParams();
    const [location, setLocation] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [company, setComapny] = useState('');
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');

    const getProfile = async () => {
        const response = await fetch("/api/getprofile", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: Number(id) })
        })
        const fullres = await response.json();
        if (fullres) {
            const result = fullres[0];
            setName(result.name);
            setProfile(result.profilepicture);
            setComapny(result.company);
            setJobtitle(result.jobtitle);
            setLocation(result.location);
        }

    }
    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div className='h-screen container '>
            <div className='h-full overflow-y-scroll'>
                <div className="relative w-full h-auto   mr-0 mb-2 border-[#D1D4E3]">
                    {/* <a href="/api/test" >Download</a> */}

                    <div className="w-full  aspect-cover-photo relative">

                        <div
                            className="h-0 overflow-hidden aspect-cover-photo border-b border-[#D1D4E3]"
                            style={{
                                width: "calc(100% + 1px)",
                                paddingBottom: "44.8%",
                                background:
                                    "linear-gradient(rgb(252, 253, 255) 0%, rgb(246, 248, 255) 100%)",
                            }}
                        ></div>
                        <div
                            className="
absolute
top-0
flex
items-center
justify-center
z-20 
w-full
h-full
"
                        >
                            <div className="transition-sharePageBanner duration-220 relative w-48 sm:w-60 top-1/2">
                                <img
                                    className="mx-auto rounded-lg bg-white transition-width transform duration-220 origin-center md:w-[240PX] md:h-[240px] w-auto h-auto"
                                    src="/public/images/avatar.jpg"
                                    alt="profile"
                                    data-test="cardView:profileImage"
                                    style={{ boxShadow: "none" }}
                                />

                                <img
                                    className="mx-auto rounded-lg bg-white"
                                    alt="profile"
                                    style={{ opacity: 0, display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mx-auto relative lg:mb-4 mb-2 mt-28 sm:mt-32 md:mt-36">
                        <span
                            className="text-header-3 text-primary-100 relative"
                            data-test="cardView:name"
                        >
                            {name}
                        </span>
                        <div className="pointer text-gray-500 text-header-4 mt-2">
                            <span data-test="cardView:jobAtCompany">{jobtitle} at {company}</span>
                        </div>
                        <div className="pointer text-gray-500 text-caption-regular uppercase mt-1">
                            {location}
                        </div>

                        <a href={`/api/genvcf?id=${id}`} className='button-clear font-Nunito font-semibold mr-4 text-[16px] text-[#1d7eff] my-0 lg:absolute lg:bottom-2 lg:right-0 bg-white ion-color ion-color-primary md button ion-activatable ion-focusable'>Download Contact</a>


                    </div>
                    <div
                        data-test="dividerButton"
                        className="
  relative
  flex
  flex-col
  items-center
  w-full
"
                    >
                        <span
                            className="
    p-2
    z-10
    pointer
    text-center
    border
    border-[#D1D4E3]
    rounded-lg
    bg-white
    text-button-small
    text-gray-500
  "
                            data-test="cardView:copyLink"
                            style={{ boxShadow: "rgba(255, 255, 255, 0.16) 0px 1px 1px" }}
                        >
                            <a href={`/#/view/${id}`}>Share Link</a>
                        </span>
                        <div className="absolute h-1/2 top-0 border-b w-full border-[#D1D4E3]" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileView