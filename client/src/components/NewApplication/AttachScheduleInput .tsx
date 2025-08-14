import React from 'react';

const AttachScheduleInput = ({ formData, handleChange }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Attach Schedule for Relevant Entities</h2>
            <p className="mb-4 text-gray-700">
                Please upload a separate schedule reflecting the required information for:
            </p>
            <ul className="mb-4 text-gray-700 list-disc list-inside">
                <li>A company or corporation: information about each director.</li>
                <li>A cooperative society: information about each governing committee member.</li>
                <li>A partnership: information about each active or administering partner.</li>
            </ul>

            <label className="block font-medium text-gray-700" htmlFor="scheduleAttachment">
                Attach Schedule
            </label>
            <input
                type="file"
                id="scheduleAttachment"
                name="scheduleAttachment"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
            />
            <p className="text-sm text-gray-600">
                Accepted file formats: PDF, DOCX, XLSX. Ensure that the file contains all required details for the applicable entity.
            </p>
        </div>
    );
};

export default AttachScheduleInput;
