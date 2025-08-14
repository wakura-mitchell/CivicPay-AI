import React, { useState } from 'react';

const BillingDetails = () => {
    const [billingDetails, setBillingDetails] = useState([]); // Stores all billing details
    const [newBillingDetail, setNewBillingDetail] = useState({
        method: '',
        accountNumber: '',
    }); // Temporary storage for new billing details

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBillingDetail({ ...newBillingDetail, [name]: value });
    };

    const addBillingDetail = () => {
        if (newBillingDetail.method && newBillingDetail.accountNumber) {
            setBillingDetails([...billingDetails, newBillingDetail]);
            setNewBillingDetail({ method: '', accountNumber: '' }); // Clear input fields
        } else {
            alert('Please fill out all fields before adding!');
        }
    };

    const deleteBillingDetail = (index) => {
        const updatedDetails = billingDetails.filter((_, i) => i !== index);
        setBillingDetails(updatedDetails);
    };

    return (
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg billingDetails">
            <h2 className="mb-4 text-xl font-bold">Manage Billing Details</h2>

            {/* Input for Adding Billing Details */}
            <div className="mb-6 addBillingDetail">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="method">
                    Payment Method:
                </label>
                <select
                    id="method"
                    name="method"
                    value={newBillingDetail.method}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    required
                >
                    <option value="" disabled>Select a method</option>
                    <option value="Ecocash">Ecocash</option>
                    <option value="OneMoney">OneMoney</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="PayPal">PayPal</option>
                </select>

                <label className="block mt-4 mb-2 font-medium text-gray-700" htmlFor="accountNumber">
                    Account Number/Reference:
                </label>
                <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={newBillingDetail.accountNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Enter account number/reference"
                    required
                />

                <button
                    onClick={addBillingDetail}
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Add Billing Detail
                </button>
            </div>

            {/* List of Existing Billing Details */}
            <div className="existingBillingDetails">
                <h3 className="mb-4 text-lg font-semibold">Existing Billing Details</h3>
                {billingDetails.length === 0 ? (
                    <p className="text-gray-600">No billing details added yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {billingDetails.map((detail, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
                            >
                                <div>
                                    <p className="font-bold">Method: {detail.method}</p>
                                    <p>Account: {detail.accountNumber}</p>
                                </div>
                                <button
                                    onClick={() => deleteBillingDetail(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BillingDetails;
