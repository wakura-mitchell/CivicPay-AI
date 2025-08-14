// import React from 'react';
// import { Application } from '../../types/Application';

// interface ApplicationListProps {
//     applications: Application[];
// }

// export const ApplicationList: React.FC<ApplicationListProps> = ({ applications = [] }) => {
//     return (
//         <div className="p-6 mt-4 bg-gray-100 rounded-lg shadow-lg applicationList">
//             <h1 className="mb-4 text-2xl font-bold text-blue-700">Your Applications</h1>
//             {applications.length === 0 ? (
//                 <p className="text-gray-600">No applications submitted yet.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="w-full bg-white rounded-lg shadow">
//                         <thead>
//                             <tr className="text-left text-gray-600 bg-gray-200">
//                                 <th className="px-4 py-2">Business Name</th>
//                                 <th className="px-4 py-2">License Type</th>
//                                 <th className="px-4 py-2">Date Applied</th>
//                                 <th className="px-4 py-2">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map((application, index) => (
//                                 <tr key={index} className="border-t">
//                                     <td className="px-4 py-2">{application.businessName}</td>
//                                     <td className="px-4 py-2">{application.licenseType}</td>
//                                     <td className="px-4 py-2">{application.dateApplied}</td>
//                                     <td
//                                         className={`px-4 py-2 font-semibold ${application.status === 'Pending'
//                                                 ? 'text-yellow-500'
//                                                 : application.status === 'Approved'
//                                                     ? 'text-green-500'
//                                                     : 'text-red-500'
//                                             }`}
//                                     >
//                                         {application.status}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default ApplicationList;

// // import React from 'react';

// // const ApplicationList = ({ applications }) => {
// //     return (
// //         <div className="p-6 mt-4 bg-gray-100 rounded-lg shadow-lg applicationList">
// //             <h1 className="mb-4 text-2xl font-bold text-blue-700">Your Applications</h1>
// //             <p className="mb-6 text-gray-600">
// //                 Here are the applications you’ve submitted. Track their status below.
// //             </p>
// //             <div className="overflow-x-auto">
// //                 <table className="w-full bg-white rounded-lg shadow">
// //                     <thead>
// //                         <tr className="text-left text-gray-600 bg-gray-200">
// //                             <th className="px-4 py-2">Business Name</th>
// //                             <th className="px-4 py-2">License Type</th>
// //                             <th className="px-4 py-2">Date Applied</th>
// //                             <th className="px-4 py-2">Status</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {applications.map((application) => (
// //                             <tr key={application.id} className="border-t">
// //                                 <td className="px-4 py-2">{application.businessName}</td>
// //                                 <td className="px-4 py-2">{application.licenseType}</td>
// //                                 <td className="px-4 py-2">{application.applicationDate}</td>
// //                                 <td
// //                                     className={`px-4 py-2 font-semibold ${application.status === 'Pending'
// //                                             ? 'text-yellow-500'
// //                                             : application.status === 'Approved'
// //                                                 ? 'text-green-500'
// //                                                 : 'text-red-500'
// //                                         }`}
// //                                 >
// //                                     {application.status}
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ApplicationList;

// // from copilot
// const ApplicationList = ({ applications = [] }) => {

//     return (
//         <div className="p-6 mt-4 bg-gray-100 rounded-lg shadow-lg applicationList">
//             <h1 className="mb-4 text-2xl font-bold text-blue-700">Your Applications</h1>
//             {applications.length === 0 ? (
//                 <p className="text-gray-600">No applications submitted yet.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="w-full bg-white rounded-lg shadow">
//                         <thead>
//                             <tr className="text-left text-gray-600 bg-gray-200">
//                                 <th className="px-4 py-2">Business Name</th>
//                                 <th className="px-4 py-2">License Type</th>
//                                 <th className="px-4 py-2">Date Applied</th>
//                                 <th className="px-4 py-2">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map((application) => (
//                                 <tr key={application.id} className="border-t">
//                                     <td className="px-4 py-2">{application.businessName}</td>
//                                     <td className="px-4 py-2">{application.licenseType}</td>
//                                     <td className="px-4 py-2">{application.applicationDate}</td>
//                                     <td className="px-4 py-2 font-semibold text-yellow-500">
//                                         {application.status}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ApplicationList;

import React from 'react';
import { Application } from '../../types/Application';

interface ApplicationListProps {
    applications: Application[];
}

export const ApplicationList: React.FC<ApplicationListProps> = ({ applications = [] }) => {
    return (
        <div className="p-6 mt-4 bg-gray-100 rounded-lg shadow-lg applicationList">
            <h1 className="mb-4 text-2xl font-bold text-blue-700">Your Applications</h1>
            {applications.length === 0 ? (
                <p className="text-gray-600">No applications submitted yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow">
                        <thead>
                            <tr className="text-left text-gray-600 bg-gray-200">
                                <th className="px-4 py-2">Business Name</th>
                                <th className="px-4 py-2">License Type</th>
                                <th className="px-4 py-2">Date Applied</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{application.businessName}</td>
                                    <td className="px-4 py-2">{application.licenseType}</td>
                                    <td className="px-4 py-2">{application.dateApplied}</td>
                                    <td
                                        className={`px-4 py-2 font-semibold ${application.status === 'Pending'
                                            ? 'text-yellow-500'
                                            : application.status === 'Approved'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                            }`}
                                    >
                                        {application.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};