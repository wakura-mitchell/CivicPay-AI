import React, { useState } from 'react';
import DatePlaceOfBirth from '../NewApplication/DatePlaceOfBith';
import DateFirstEntryZimbabwe from '../NewApplication/DateFirstEntryZimbabwe';
import AttachScheduleInput from '../NewApplication/AttachScheduleInput ';
import MultiSelectDropdown from '../NewApplication/MultiSelectDropdown';
import GoodsSaleMethod from '../NewApplication/GoodsSaleMethod';
import TradeTypeSelector from '../NewApplication/TradeTypeSelector';
import EstateSequestrationComponent from '../NewApplication/EstateSequestrationComponent ';
import PremisesDetails from '../NewApplication/PremisesDetails';
import VendingMachinesDetails from '../NewApplication/VendingMachinesDetails';
import AuthorityAttachment from '../NewApplication/AuthorityAttachment';
import Declaration from '../NewApplication/Declaration';

interface MultiStepFormProps {
    onSubmit: (application: { businessName: string; licenseType: string; applicationDate: string }) => void;
    onClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onSubmit, onClose }) => {
    const [applicationData, setApplicationData] = useState({
        businessName: '',
        licenseType: '',
        applicationDate: '',
    })
    const [step, setStep] = useState(1); // Track the current step
    const totalSteps = 8; // Total number of steps
    const [formData, setFormData] = useState({
        applicationType: '', // step 1
        fullName: '',
        maidenName: '',
        ownerOfTrade: '',
        residentialAddress: '',
        telephoneNumber: '',
        businessAddress: '',
        dateOfBirth: '',
        firstEntryDate: '', // end of step 2 and 3
        convictions: '',
        tradeName: '', // step 4
        tradeDescription: '',
        goodsClasses: [],
        goodsClassNotAvailable: '',
        goodsSaleMethod: '',
        tradeType: '',
        sequestrationDetails: '', // end of step 4
        premisesUrban: '', // step 5
        premisesRural: '',
        stand: '',
        township: '',
        streetName: '',
        buildingName: '',
        shopNumber: '',
        floorNumber: '',
        telephone: '',
        plotNumber: '',
        farmName: '',
        miningNumber: '',
        siteDescription: '',
        buildingPlansApproval: '',
        completionTime: '',
        machines: [],
        authorityFile: '',
        declarationDate: '',
        applicantSignature: '',
        signingCapacity: '',
    });

    const goodsOptions = [
        "Class 1: Food Products",
        "Class 2: Clothing and Apparel",
        "Class 3: Electronics",
        "Class 4: Furniture and Home Goods",
        "Class 5: Books and Stationery",
        "Class 6: Hardware and Tools",
    ];

    const setMachines = (machines) => {
        setFormData((prevData) => ({ ...prevData, machines }));
    };

    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0]; // Get the uploaded file
        setFormData((prevData) => ({
            ...prevData,
            [name]: file, // Update the file in formData
        }));
    };

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handleBack = () => setStep((prevStep) => prevStep - 1);
    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     console.log('Application Submitted:', formData);
    //     alert('Your application has been submitted!');
    //     onClose(); // Close the modal
    // };
    // const handleSubmit = () => {
    //     if (newApplication.businessName && newApplication.licenseType && newApplication.applicationDate) {
    //         onSubmit(newApplication); // Pass data to parent component
    //         setNewApplication({
    //             businessName: '',
    //             licenseType: '',
    //             applicationDate: '',
    //         });
    //     } else {
    //         alert('Please fill out all fields');
    //     }
    // }

    // const handleSubmit = () => {
    //     if (formData.tradeName && formData.goodsClasses.length > 0) {
    //         const newApplication = {
    //             businessName: formData.tradeName,
    //             licenseType: formData.goodsClasses.join(', '),
    //             applicationDate: new Date().toLocaleDateString(),
    //         };
    //         onSubmit(newApplication); // Pass data to parent component
    //     } else {
    //         alert('Please fill out all required fields');
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (formData.tradeName && formData.goodsClasses.length > 0) {
            const newApplication = {
                businessName: formData.tradeName,
                licenseType: formData.goodsClasses.join(', '),
                applicationDate: new Date().toLocaleDateString(),
            };
            onSubmit(newApplication);
            setFormData({
                ...formData,
                tradeName: '',
                goodsClasses: [],
            });
        } else {
            alert('Please fill out all required fields');
        }
    };

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-95 z-100 bg-slate-950">
            <div className="bg-slate-300 w-[95%] h-[95%] md:w-[50%] md:h-[90%] rounded-lg p-6 shadow-lg overflow-auto no-scrollbar ">
                {/* Back Button */}
                <button
                    onClick={onClose}
                    className="fixed h-10 p-2 mb-4 font-bold text-red-500 rounded-lg shadow hover:text-red-700 bg-amber-500"
                >
                    Back to Dashboard
                </button>

                {/* Step Indicator */}
                <div className="flex items-center justify-between mt-12 mb-6">
                    {Array.from({ length: totalSteps }, (_, index) => (
                        <div
                            key={index}
                            className={`h-2 flex-1 mx-1 rounded ${index + 1 <= step ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

                <h1 className="mb-4 text-2xl font-bold">New License Application</h1>

                {/* Form Sections */}
                <div>
                    <form onSubmit={handleSubmit} className="p-16 space-y-4 bg-white border border-transparent shadow-xl z-100 rounded-4xl">
                        {/* Step 1: Type of Application */}
                        {step === 1 && (
                            <div className="space-y-1">
                                <h2 className="mb-4 text-xl font-semibold">Step 1: Type of Application</h2>
                                <label className="block font-medium text-gray-700">
                                    Select Application Type
                                </label>
                                <select
                                    name="ownerOfTrade"
                                    value={formData.ownerOfTrade}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                >
                                    <option value="" disabled>Select type</option>
                                    <option value="new">For a new license</option>
                                    <option value="extend">To extend a trade or business</option>
                                    <option value="remove">To remove a trade or business</option>
                                    <option value="alter">Removal/alteration of condition</option>
                                </select>

                            </div>
                        )}

                        {/* Step 2: Particulars of Applicant */}
                        {step === 2 && (
                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Step 2: Particulars of Applicant</h2>
                                <label className="block font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />
                                <label className="block mt-4 font-medium text-gray-700">Maiden Name</label>
                                <input
                                    type="text"
                                    name="maidenName"
                                    value={formData.maidenName}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                />
                                <label className="block font-medium text-gray-700">
                                    Is or will the applicant be the owner of the trade or business?
                                </label>
                                <select
                                    name="applicationType"
                                    value={formData.applicationType}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="new">Yes</option>
                                    <option value="extend">No</option>
                                </select>
                                <label className="block font-medium text-gray-700">Residential address and telephone number</label>
                                <input
                                    type="text"
                                    name="residentialAddress"
                                    value={formData.residentialAddress}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <label className="block font-medium text-gray-700"> Business address and telephone number</label>
                                <input
                                    type="text"
                                    name="telephoneNumber"
                                    value={formData.telephoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />
                                <DatePlaceOfBirth
                                    formData={formData}
                                    handleChange={handleChange}
                                />

                                <DateFirstEntryZimbabwe
                                    formData={formData}
                                    handleChange={handleChange}
                                />

                                <AttachScheduleInput
                                    formData={formData}
                                    handleChange={handleChange}
                                />
                            </div>
                        )}

                        {/* Step 3: Particulars of person in control of the business */}
                        {step === 3 && (
                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Step 3: Particulars of person in control of the business</h2>
                                <label className="block font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <label className="block mt-4 font-medium text-gray-700">Maiden Name</label>
                                <input
                                    type="text"
                                    name="maidenName"
                                    value={formData.maidenName}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                />

                                <label className="block font-medium text-gray-700">Residential address and telephone number</label>
                                <input
                                    type="text"
                                    name="residentialAddress"
                                    value={formData.residentialAddress}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <label className="block font-medium text-gray-700"> Business address and telephone number</label>
                                <input
                                    type="text"
                                    name="telephoneNumber"
                                    value={formData.telephoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <DatePlaceOfBirth
                                    formData={formData}
                                    handleChange={handleChange}
                                />

                                <DateFirstEntryZimbabwe
                                    formData={formData}
                                    handleChange={handleChange}
                                />

                            </div>
                        )}

                        {/* Step 4: Particulars of person in control of the business */}
                        {step === 4 && (
                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Step 4: Nature and particulars of the business</h2>

                                <label className="block font-medium text-gray-700">Business/Trading name</label>
                                <input
                                    type="text"
                                    name="tradeName"
                                    value={formData.tradeName}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <MultiSelectDropdown
                                    options={goodsOptions}
                                    selectedOptions={formData.goodsClasses}
                                    setSelectedOptions={(selected) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            goodsClasses: selected,
                                        }))
                                    }
                                />

                                <label className="block font-medium text-gray-700"> If not classified, specify the goods to be dealt in</label>
                                <input
                                    type="text"
                                    name="goodsClassNotAvailable"
                                    value={formData.goodsClassNotAvailable}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    required
                                />

                                <GoodsSaleMethod
                                    selectedOption={formData.goodsSaleMethod}
                                    handleChange={handleChange}
                                />

                                <TradeTypeSelector
                                    selectedTradeType={formData.tradeType}
                                    handleChange={handleChange}
                                />

                                <EstateSequestrationComponent
                                    formData={formData}
                                    handleChange={(e) => {
                                        const { name, value, files } = e.target;
                                        const updatedValue = files ? files[0] : value;

                                        setFormData((prevData) => ({
                                            ...prevData,
                                            [name]: updatedValue,
                                        }));
                                    }}
                                />
                            </div>
                        )}

                        {/* Step 5: Situation of premises */}
                        {step === 5 && (
                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Step 5: Situation of premises</h2>
                                <PremisesDetails
                                    formData={formData}
                                    handleChange={handleChange}
                                />

                            </div>
                        )}

                        {/* Step 6: vending machine */}
                        {step === 6 && (
                            <VendingMachinesDetails
                                machines={formData.machines}
                                setMachines={setMachines}
                            />
                        )}

                        {/* Step 7:  Authority attachment*/}
                        {step === 7 && (
                            <AuthorityAttachment
                                formData={formData}
                                handleFileChange={handleFileChange}
                            />
                        )}

                        {step === 8 && (
                            <Declaration
                                formData={formData}
                                handleChange={(e) => {
                                    const { name, value } = e.target;
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        [name]: value,
                                    }));
                                }}
                            />
                        )}
                        {/* Other Steps can be added similarly */}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Back
                                </button>
                            )}
                            {step < totalSteps && (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    Next
                                </button>
                            )}
                            {step === totalSteps && (
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
