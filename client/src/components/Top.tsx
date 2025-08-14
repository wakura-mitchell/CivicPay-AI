import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoNotificationsCircle } from 'react-icons/io5'
import { TbMessageCircle } from 'react-icons/tb'
import Me from '../assets/me.jpg'
import video from '../assets/e-solutions.mp4'

const Top = () => {
    return (
        <div className="justify-between p-4 topSection">
            {/* Header Section */}
            <div className="flex flex-wrap items-center justify-between headerSection">
                <div className="mb-4 title md:mb-0">
                    <h1 className="text-xl font-bold md:text-2xl">Welcome to MCC eLicense</h1>
                    <p className="text-sm font-medium md:text-base">Hello Wakura, Welcome back</p>
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center w-full mb-4 searchBar md:w-auto md:mb-0">
                    <input
                        type="text"
                        placeholder="Enter your content"
                        className="w-full md:w-[250px] border border-slate-700 rounded-lg py-2 md:py-3 px-4 md:px-5 outline-none bg-transparent shadow-md"
                    />
                    <BiSearchAlt className="absolute text-xl cursor-pointer right-4" />
                </div>

                {/* Admin Section */}
                <div className="flex items-center gap-4 adminDiv">
                    <TbMessageCircle className="p-2 text-xl text-gray-600 bg-white rounded-full shadow cursor-pointer md:text-2xl" />
                    <IoNotificationsCircle className="p-2 text-xl text-gray-600 bg-white rounded-full shadow cursor-pointer md:text-2xl" />
                    <div className="adminImage">
                        <img
                            src={Me}
                            className="w-10 h-10 border rounded-full md:w-15 md:h-15"
                            alt="admin"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
