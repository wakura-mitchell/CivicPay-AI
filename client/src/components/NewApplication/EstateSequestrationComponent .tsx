import React, { useState } from 'react';

const EstateSequestrationComponent = ({ formData, handleChange }) => {
    const [isSequestrated, setIsSequestrated] = useState(null); // Track "YES" or "NO"

    const handleSequestrationChange = (value) => {
        setIsSequestrated(value);
        // Clear any previous inputs based on the selection
        handleChange({ target: { name: 'rehabilitated', value: '' } });
        handleChange({ target: { name: 'trusteeConsent', value: null } });
    };

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Estate Sequestration</h2>

            {/* Has the applicant's estate been sequestrated? */}
            <p className="mb-4 text-gray-700">Has the applicant's estate ever been sequestrated in Zimbabwe or elsewhere?</p>
            <div className="mb-6 space-y-2">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="sequestrated"
                        value="yes"
                        checked={isSequestrated === 'yes'}
                        onChange={() => handleSequestrationChange('yes')}
                        className="mr-2"
                    />
                    Yes
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="sequestrated"
                        value="no"
                        checked={isSequestrated === 'no'}
                        onChange={() => handleSequestrationChange('no')}
                        className="mr-2"
                    />
                    No
                </label>
            </div>

            {/* Follow-up for "YES" */}
            {isSequestrated === 'yes' && (
                <div>
                    <p className="mb-4 text-gray-700">If “YES,” has the applicant been rehabilitated?</p>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="rehabilitated"
                                value="yes"
                                checked={formData.rehabilitated === 'yes'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Yes
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="rehabilitated"
                                value="no"
                                checked={formData.rehabilitated === 'no'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            No
                        </label>
                    </div>
                </div>
            )}

            {/* Follow-up for "NO" */}
            {isSequestrated === 'no' && (
                <div>
                    <p className="mb-4 text-gray-700">
                        If “NO,” please upload the consent of the applicant’s trustee to carry on the trade or business:
                    </p>
                    <input
                        type="file"
                        name="trusteeConsent"
                        onChange={(e) => handleChange(e)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                        Accepted file formats: PDF, DOCX, JPG.
                    </p>
                </div>
            )}
        </div>
    );
};

export default EstateSequestrationComponent;
