import React, { useState } from 'react';

const MultiSelectDropdown = ({ options, selectedOptions, setSelectedOptions }) => {
    const handleSelect = (option: any) => {
        if (selectedOptions.includes(option)) {
            // Remove the option if it's already selected
            setSelectedOptions(selectedOptions.filter((item: any) => item !== option));
        } else {
            // Add the option if it's not selected
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <label className="block font-medium text-gray-700" htmlFor="placeOfBirth">
                Type of goods the trades
            </label>
            <div className="p-4 mb-4 border border-gray-300 rounded">
                {options.map((option, index) => (
                    <label key={index} className="block mb-2">
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleSelect(option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
            </div>
            {selectedOptions.length > 0 && (
                <p className="mt-4 mb-4 text-gray-700">
                    Selected Classes: {selectedOptions.join(', ')}
                </p>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
