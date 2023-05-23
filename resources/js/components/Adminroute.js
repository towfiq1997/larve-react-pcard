import React, { useEffect, useState } from 'react'


const Adminroute = () => {
    const [profiles, setProfiles] = useState([]);

    const getProfiles = async () => {
        const response = await fetch("/api/allprofile");
        const result = await response.json();
        setProfiles(result);

    }
    useEffect(() => {
        getProfiles();
    }, [])

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Download
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {
                        Array.isArray(profiles) && profiles.map((profile, index) => (
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {profile.name}
                                </th>

                                <td class="px-6 py-4">
                                    <a href={`/api/genvcf?id=${profile.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}

export default Adminroute