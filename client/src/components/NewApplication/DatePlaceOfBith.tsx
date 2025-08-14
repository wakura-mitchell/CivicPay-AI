import React from 'react';

const DatePlaceOfBirth = ({ formData, handleChange }) => {
    return (
        <div>
            {/* Date of Birth Input */}
            <label className="block font-medium text-gray-700" htmlFor="dateOfBirth">
                Date of Birth
            </label>
            <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth || ""}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
            />

            {/* Place of Birth Input */}
            <label className="block font-medium text-gray-700" htmlFor="placeOfBirth">
                Place of Birth
            </label>
            <input
                list="placesOfBirth"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth || ""}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter or select place of birth"
                required
            />
            {/* Datalist for Suggestions */}
            <datalist id="placesOfBirth">
                <option value="Harare" />
                <option value="Bulawayo" />
                <option value="Masvingo" />
                <option value="Mutare" />
                <option value="Gweru" />
                <option value="Victoria Falls" />
            </datalist>
        </div>
    );
};

export default DatePlaceOfBirth;
