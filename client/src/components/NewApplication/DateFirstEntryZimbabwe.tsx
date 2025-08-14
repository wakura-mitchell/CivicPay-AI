import React from 'react';

const DateFirstEntryZimbabwe = ({ formData, handleChange }) => {
    return (
        <div>
            {/* Date of First Entry Input */}
            <label className="block font-medium text-gray-700" htmlFor="firstEntryDate">
                Date of First Entry
            </label>
            <input
                type="date"
                id="firstEntryDate"
                name="firstEntryDate"
                value={formData.firstEntryDate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
            />

            {/* Place of First Entry Input */}
            <label className="block font-medium text-gray-700" htmlFor="placeFirstEntry">
                Place of First Entry
            </label>
            <input
                list="placesOfFirstEntry"
                id="placeFirstEntry"
                name="placeFirstEntry"
                value={formData.placeFirstEntry}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter or select place of first entry"
                required
            />
            {/* Datalist for Suggestions */}
            <datalist id="placesOfFirstEntry">
                <option value="Harare International Airport" />
                <option value="Beitbridge Border Post" />
                <option value="Victoria Falls Airport" />
                <option value="Plumtree Border Post" />
                <option value="Mutare Border Post" />
            </datalist>
        </div>
    );
};

export default DateFirstEntryZimbabwe;
