import React, { useState } from 'react';

const VendingMachinesDetails = ({ machines, setMachines }) => {
    const addMachine = () => {
        setMachines([
            ...machines,
            { description: '', location: '' }, // Add a new machine entry
        ]);
    };

    const removeMachine = (index) => {
        const updatedMachines = machines.filter((_, idx) => idx !== index);
        setMachines(updatedMachines);
    };

    const handleMachineChange = (index, field, value) => {
        const updatedMachines = [...machines];
        updatedMachines[index][field] = value;
        setMachines(updatedMachines);
    };

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Vending Machines Details</h2>
            <p className="mb-4 text-gray-700">
                If the applicant intends to trade only from vending machines, please describe the machines and specify where they will be situated.
            </p>

            {machines.map((machine, index) => (
                <div key={index} className="p-4 mb-4 border border-gray-300 rounded">
                    <h3 className="mb-2 text-lg font-medium">Machine {index + 1}</h3>
                    {/* Machine Description */}
                    <label className="block mb-2 text-gray-700">
                        Machine Description:
                        <textarea
                            name={`machineDescription-${index}`}
                            value={machine.description}
                            onChange={(e) =>
                                handleMachineChange(index, 'description', e.target.value)
                            }
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Describe the vending machine (e.g., type, size, products dispensed)"
                            rows="3"
                        />
                    </label>

                    {/* Machine Location */}
                    <label className="block mb-2 text-gray-700">
                        Location:
                        <textarea
                            name={`machineLocation-${index}`}
                            value={machine.location}
                            onChange={(e) =>
                                handleMachineChange(index, 'location', e.target.value)
                            }
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Specify where the machine will be situated"
                            rows="2"
                        />
                    </label>

                    {/* Remove Machine Button */}
                    <button
                        type="button"
                        onClick={() => removeMachine(index)}
                        className="mt-2 text-sm text-red-500 hover:text-red-700"
                    >
                        Remove Machine
                    </button>
                </div>
            ))}

            {/* Add Another Machine Button */}
            <button
                type="button"
                onClick={addMachine}
                className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Add Another Machine
            </button>
        </div>
    );
};

export default VendingMachinesDetails;
