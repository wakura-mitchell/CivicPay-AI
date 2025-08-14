import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { IoAdd, IoAlbumsOutline, IoHomeOutline, IoListOutline, IoNewspaperOutline } from 'react-icons/io5';
import { IoMdPaper } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { MdCreditCard, MdOutlinePermContactCalendar, MdSettings } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import NewApplicationModal from './NewApplication/NewApplicationModal';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
    applications: { id: number; businessName: string; licenseType: string; applicationDate: string; status: string }[];
    setApplications: Dispatch<SetStateAction<any[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ applications, setApplications }) => {
    const [isExpanded, setIsExpanded] = useState(true); // Sidebar toggle state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation(); // For active state highlighting
    // Handle submission of a new application
    const handleNewApplication = (newApplication) => {
        setApplications([...applications, { ...newApplication, id: Date.now(), status: 'Pending' }]);
        setIsModalOpen(false); // Close the modal after submission
    };

    return (
        <div className="relative">
            {/* Full-Screen Overlay for Mobile */}
            <div
                className={`fixed insert-0 z-10 bg-black h-auto bg-opacity-25 transition-opacity duration-300 ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
                    } md:hidden`}
                onClick={() => setIsExpanded(false)}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed z-100  bg-white shadow-2xl h-[94%] transition-all duration-300  overflow-y-auto no-scrollbar rounded-lg
        ${isExpanded ? 'w-[40%] md:w-[18%] lg:w-[18%]' : 'w-[50px] md:w-[5%]'} `}
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-2 m-2 text-gray-700 transition rounded-full hover:bg-gray-100 focus:outline-none"
                >
                    <GiHamburgerMenu size={20} />
                </button>

                {/* Logo Section */}
                <div
                    className={`flex items-center justify-center logoDiv transition-all duration-300 ${isExpanded ? 'gap-4 px-4' : 'justify-center'
                        }`}
                >
                    <img
                        src={logo}
                        alt="MCC Logo"
                        className={`h-auto rounded ${isExpanded ? 'w-12' : 'w-8'}`}
                    />
                    {isExpanded && <h2 className="text-lg font-bold">MCC eLicense</h2>}
                </div>

                {/* Quick Menu */}
                <div className="mt-6 menuDiv">
                    {isExpanded && (
                        <h3 className="mb-4 text-xl font-bold text-center">Quick Menu</h3>
                    )}
                    <ul className="flex flex-col gap-2 menuList">
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/home' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/home" className="flex items-center gap-3">
                                <IoHomeOutline className="text-xl " />
                                {isExpanded && <span>Home</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/user-licenses' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/user-licenses" className="flex items-center gap-3 md:items-start md:justify-items-start">
                                <IoMdPaper className="text-xl" />
                                {isExpanded && <span>My Licenses</span>}
                            </Link>
                        </li>
                        <li className="p-2 rounded-lg listItem hover:bg-gray-100">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-3"
                            >
                                <IoAdd className="text-xl" />
                                {isExpanded && <span>New Application</span>}
                            </button>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/applications' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/applications" className="flex items-center gap-3">
                                <IoAlbumsOutline className="text-xl" />
                                {isExpanded && <span>Applications</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/news' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/news" className="flex items-center gap-3">
                                <IoNewspaperOutline className="text-xl" />
                                {isExpanded && <span>MCC News</span>}
                            </Link>
                        </li>
                    </ul>
                    {
                        isModalOpen && <NewApplicationModal onClose={() => setIsModalOpen(false)}
                            onSubmit={handleNewApplication}
                        />}
                </div>

                {/* Settings */}
                <div className="mt-6 settingsDiv">
                    {isExpanded && (
                        <h3 className="mb-4 text-xl font-bold text-center">Settings</h3>
                    )}
                    <ul className="flex flex-col gap-2 menuList">
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/services' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/services" className="flex items-center gap-3">
                                <IoListOutline className="text-xl" />
                                {isExpanded && <span>Services</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/profile' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/user-profile" className="flex items-center gap-3">
                                <AiOutlineUser className="text-xl" />
                                {isExpanded && <span>My Profile</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/contacts' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/hot-contacts" className="flex items-center gap-3">
                                <MdOutlinePermContactCalendar className="text-xl" />
                                {isExpanded && <span>Hot Contacts</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/billing-details' && 'bg-blue-100'}`}>
                            <Link to="/dashboard/billing-details" className="flex items-center gap-3">
                                <MdCreditCard className="text-xl" />
                                {isExpanded && <span>Billing Details</span>}
                            </Link>
                        </li>
                        <li className={`p-2 rounded-lg listItem hover:bg-gray-100 ${location.pathname === '/extra' && 'bg-blue-100'}`}>
                            <Link to="/extra" className="flex items-center gap-3">
                                <MdSettings className="text-xl" />
                                {isExpanded && <span>Extra</span>}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Help Center */}
                <div className="relative p-4 mt-6 bg-gray-100 rounded-lg sideBarCard">
                    <BsQuestionCircle className="absolute top-[-8px] left-[50%] transform translate-x-[-50%] text-2xl text-red-400 bg-white rounded-full p-1 shadow-lg" />
                    {isExpanded && (
                        <>
                            <h3 className="mb-2 text-sm font-bold text-center">Help Center</h3>
                            <p className="mb-3 text-xs text-center text-gray-700">
                                Are you having trouble using eLicense? Contact support for more questions.
                            </p>
                            <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                                Get Help
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
