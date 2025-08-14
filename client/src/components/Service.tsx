const services = [
    { id: 1, name: "Check Water Bill", description: "View and pay your water bill online." },
    { id: 2, name: "Report Blockages", description: "Report blockages in the water or drainage systems." },
    { id: 3, name: "Request Water Tanker", description: "Request water tanker services for emergencies." },
    { id: 4, name: "Track Service Requests", description: "Check the status of your service requests." },
];

import React from 'react'

const Service = () => {
    return (
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Available Services</h2>
            <ul className="mt-4 space-y-4">
                {services.map((service) => (
                    <li key={service.id} className="flex items-center justify-between pb-2 border-b">
                        <div>
                            <p className="font-medium text-gray-700">{service.name}</p>
                            <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                            Access
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Service