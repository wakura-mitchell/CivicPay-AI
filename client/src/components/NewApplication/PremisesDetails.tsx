import React, { useState } from 'react';

const PremisesDetails = ({ formData, handleChange }) => {
    const [isUrban, setIsUrban] = useState(true); // Toggle between Urban and Rural options

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Situation of Premises</h2>
            <p className="mb-4 text-gray-700">
                Please provide details about the premises for the trade or business. If vending machine trading only is conducted, go to the next step.
            </p>

            {/* Urban or Rural Toggle */}
            <div className="mb-6">
                <label className="mr-4">
                    <input
                        type="radio"
                        name="premisesType"
                        value="urban"
                        checked={isUrban}
                        onChange={() => setIsUrban(true)}
                        className="mr-2"
                    />
                    Urban
                </label>
                <label>
                    <input
                        type="radio"
                        name="premisesType"
                        value="rural"
                        checked={!isUrban}
                        onChange={() => setIsUrban(false)}
                        className="mr-2"
                    />
                    Rural
                </label>
            </div>

            {/* Urban Premises Details */}
            {isUrban && (
                <div className="space-y-4">
                    <label className="block text-gray-700">
                        Stand:
                        <input
                            type="text"
                            name="stand"
                            value={formData.stand}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Township/Suburb:
                        <input
                            type="text"
                            name="township"
                            value={formData.township}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Street No. and Name:
                        <input
                            type="text"
                            name="streetName"
                            value={formData.streetName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Name of Building:
                        <input
                            type="text"
                            name="buildingName"
                            value={formData.buildingName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Office/Shop No:
                        <input
                            type="text"
                            name="shopNumber"
                            value={formData.shopNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Floor No:
                        <input
                            type="text"
                            name="floorNumber"
                            value={formData.floorNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Telephone No:
                        <input
                            type="text"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                </div>
            )}

            {/* Rural Premises Details */}
            {!isUrban && (
                <div className="space-y-4">
                    <label className="block text-gray-700">
                        Plot/Portion Number:
                        <input
                            type="text"
                            name="plotNumber"
                            value={formData.plotNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Name of Farm/Agricultural Holding:
                        <input
                            type="text"
                            name="farmName"
                            value={formData.farmName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Registered Number of Mining Location:
                        <input
                            type="text"
                            name="miningNumber"
                            value={formData.miningNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-gray-700">
                        Description of Site (Tribal Trust/African Purchase Land):
                        <textarea
                            name="siteDescription"
                            value={formData.siteDescription}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            rows="3"
                        />
                    </label>
                </div>
            )}

            {/* New/Erected Premises Details */}
            <div className="mt-6 space-y-4">
                <label className="block text-gray-700">
                    Have building plans been approved by the competent authority?
                    <input
                        type="text"
                        name="buildingPlansApproval"
                        value={formData.buildingPlansApproval}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                </label>
                <label className="block text-gray-700">
                    State the time required for the completion of such erection, additions, or alterations:
                    <textarea
                        name="completionTime"
                        value={formData.completionTime}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        rows="3"
                    />
                </label>
            </div>
        </div>
    );
};

export default PremisesDetails;
