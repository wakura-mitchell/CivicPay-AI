import React from 'react';
import video from '../assets/e-solutions.mp4'

const Home = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg home">
            <h1 className="mb-4 text-3xl font-bold text-blue-700">Welcome to the MCC eLicense System</h1>
            <p className="mb-6 text-lg text-gray-700">
                The Masvingo City Council eLicense system simplifies business license management. Apply for new licenses,
                renew existing ones, and manage your applications—all in one place!
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-blue-700">Fast Application</h3>
                    <p className="text-gray-600">Submit your applications in minutes with our easy-to-use portal.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-blue-700">Secure Payments</h3>
                    <p className="text-gray-600">Pay online using trusted options like Ecocash and OneMoney.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-blue-700">Track Progress</h3>
                    <p className="text-gray-600">Monitor your application status and stay updated at every step.</p>
                </div>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap gap-4 mt-10 cardSection">
                {/* New Application Card */}
                <div className="flex rightCard relative flex-col items-start justify-center w-full md:w-[70%] h-auto md:h-52 m-auto p-6 md:p-8 rounded-2xl overflow-hidden shadow-md">
                    <h1 className="z-50 text-lg font-extrabold md:text-xl text-slate-700">
                        New Application
                    </h1>
                    <p className="z-50 p-4 text-sm font-bold md:text-base text-emerald-900">
                        Do you want to make a new application and get more with your digital license
                    </p>
                    <div className="z-50 flex flex-wrap items-center gap-4">
                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-300 bg-blue-500 rounded-lg md:text-base hover:bg-transparent hover:outline hover:text-black">
                            New Application
                        </button>
                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-300 bg-orange-400 border rounded-lg md:text-base hover:bg-transparent hover:outline hover:text-black">
                            Discover More
                        </button>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full videoDiv">
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            className="object-cover w-full h-full"
                        ></video>
                    </div>
                </div>

                {/* Small Cards */}
                <div className="flex flex-wrap w-full gap-4 md:w-auto">
                    {/* Total Licenses Card */}
                    <div className="p-4 md:p-6 bg-blue-100 rounded-lg shadow-md w-full md:w-[48%] h-auto md:h-52">
                        <h2 className="text-lg font-semibold text-blue-700">Total Licenses</h2>
                        <p className="mt-4 text-2xl font-bold text-blue-900 md:text-3xl">12</p>
                        <p className="text-sm text-blue-600">All licenses owned by the user</p>
                        <button className="px-4 py-2 mt-4 text-sm text-white bg-blue-500 rounded md:text-base hover:bg-blue-700">
                            View
                        </button>
                    </div>

                    {/* In-progress Applications Card */}
                    <div className="p-4 md:p-6 bg-green-100 rounded-lg shadow-md w-full md:w-[48%] h-auto md:h-52">
                        <h2 className="text-lg font-semibold text-green-700">
                            In-progress Applications
                        </h2>
                        <p className="mt-4 text-2xl font-bold text-green-900 md:text-3xl">3</p>
                        <p className="text-sm text-green-600">Applications currently being processed</p>
                        <button className="px-4 py-2 mt-4 text-sm text-white bg-green-500 rounded md:text-base hover:bg-green-700">
                            View
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
