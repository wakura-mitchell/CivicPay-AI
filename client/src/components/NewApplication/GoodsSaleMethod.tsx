import React from 'react';

const GoodsSaleMethod = ({ selectedOption, handleChange }) => {
    return (
        <div>
            <label className="block mb-2 font-medium text-gray-700">Goods Sale Method</label>
            <p className="mb-1 text-gray-700">Please specify how the goods are or will be sold:</p>

            <div className="mb-4 space-y-2">
                {/* Option 1 */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="goodsSaleMethod"
                        value="outOfHand"
                        checked={selectedOption === "outOfHand"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Sold to out of hand
                </label>

                {/* Option 2 */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="goodsSaleMethod"
                        value="auction"
                        checked={selectedOption === "auction"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Sold by auction
                </label>

                {/* Option 3 */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="goodsSaleMethod"
                        value="vendingMachines"
                        checked={selectedOption === "vendingMachines"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Sold from vending machines
                </label>

                {/* Option 4 */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="goodsSaleMethod"
                        value="letForHire"
                        checked={selectedOption === "letForHire"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Let for hire
                </label>
            </div>
        </div>
    );
};

export default GoodsSaleMethod;
