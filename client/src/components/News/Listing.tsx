import React from 'react'

// CouncilNews Component
const news = [
    { id: 1, title: "Community Cleanup Event Announced", date: "March 20, 2025" },
    { id: 2, title: "Budget Meeting Highlights Released", date: "March 18, 2025" },
    { id: 3, title: "Council Welcomes New Members", date: "March 15, 2025" },
];

const Listing = () => {
    return (
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Council News</h2>
            <ul className="mt-4 space-y-2">
                {news.map((item) => (
                    <li key={item.id} className="pb-2 border-b">
                        <p className="font-medium text-gray-700">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listing