import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Body from './Body';


const Dashboard = () => {
    const [applications, setApplications] = useState([]); // Centralized state for all applications
    // Function to add new application
    const addApplication = (newApplication) => {
        setApplications((prevApplications) => [...prevApplications, {
            newApplication,
            id: Date.now(), // Unique ID for each application
            status: 'Pending', // Default status for new applications
        }]);
    }
    return (
        <>
            <div className="relative flex w-[95vw] h-[95vh] overflow-hidden shadow-2xl rounded-lg m-auto mt-2 p-0.5  bg-gray-200 no-scrollbar">
                {/* Sidebar */}
                <div className="w-auto h-full md:w-[18%] shadow-lg">
                    <Sidebar applications={applications} setApplications={setApplications} />
                </div>

                {/* Body */}
                <div className="flex-1 p-4 overflow-auto bg-gray-100">
                    <Body applications={applications} />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
