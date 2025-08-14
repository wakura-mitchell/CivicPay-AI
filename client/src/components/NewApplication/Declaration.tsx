import React from 'react';

const Declaration = ({ formData, handleChange }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Declaration</h2>
            <p className="mb-4 text-gray-700">
                I hereby declare that the information given in this application is true and correct.
            </p>

            {/* Date Input */}
            <label className="block mb-2 font-medium text-gray-700" htmlFor="declarationDate">
                Date:
            </label>
            <input
                type="date"
                id="declarationDate"
                name="declarationDate"
                value={formData.declarationDate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
            />

            {/* Signature Input */}
            <label className="block mb-2 font-medium text-gray-700" htmlFor="applicantSignature">
                Signature of Applicant:
            </label>
            <input
                type="text"
                id="applicantSignature"
                name="applicantSignature"
                value={formData.applicantSignature}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your name as your signature"
                required
            />

            {/* Capacity Input */}
            <label className="block mb-2 font-medium text-gray-700" htmlFor="signingCapacity">
                Capacity in which signing:
            </label>
            <input
                type="text"
                id="signingCapacity"
                name="signingCapacity"
                value={formData.signingCapacity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="E.g., Owner, Director, etc."
                required
            />
        </div>
    );
};

export default Declaration;
