import React from 'react';

const AuthorityAttachment = ({ formData, handleFileChange }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Attach Required Authority</h2>
            <p className="mb-4 text-gray-700">
                If you require any authority under the provisions of any other law, including any by-law, before a licensing authority can grant, issue, or renew a license, please attach such authority or a certified copy.
            </p>

            {/* File Upload Input */}
            <label className="block mb-2 font-medium text-gray-700" htmlFor="authorityFile">
                Upload Authority Document:
            </label>
            <input
                type="file"
                id="authorityFile"
                name="authorityFile"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
            />
            <p className="mt-2 text-sm text-gray-600">
                Accepted file formats: PDF, DOCX, or JPG. Ensure that the file is clear and certified where necessary.
            </p>
        </div>
    );
};

export default AuthorityAttachment;
