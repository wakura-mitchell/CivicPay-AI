import React from 'react';

const TradeTypeSelector = ({ selectedTradeType, handleChange }) => {
    return (
        <div>
            <p className="mb-4 text-gray-700">Please specify whether the goods are traded as:</p>

            <div className="space-y-2">
                {/* Option 1: Wholesaler */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="tradeType"
                        value="wholesaler"
                        checked={selectedTradeType === "wholesaler"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Wholesaler
                </label>

                {/* Option 2: Retailer */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="tradeType"
                        value="retailer"
                        checked={selectedTradeType === "retailer"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Retailer
                </label>

                {/* Option 3: Both */}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="tradeType"
                        value="both"
                        checked={selectedTradeType === "both"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Both
                </label>
            </div>
        </div>
    );
};

export default TradeTypeSelector;
