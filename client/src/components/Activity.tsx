import React from 'react'
const activities = [
    { id: 1, name: "Tree Planting Drive", status: "Ongoing" },
    { id: 2, name: "Road Repair Initiative", status: "Ongoing" },
    { id: 3, name: "Public Feedback Collection", status: "Ongoing" },
];

const Activity = () => {
    return (
        < div className="w-full p-6 bg-gray-100 rounded-lg shadow-md" >
            <h2 className="text-lg font-semibold text-gray-800">Council Activities</h2>
            <ul className="mt-4 space-y-2">
                {activities.map((activity) => (
                    <li key={activity.id} className="pb-2 border-b">
                        <p className="font-medium text-gray-700">{activity.name}</p>
                        <p className="text-sm text-gray-500">{activity.status}</p>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Activity