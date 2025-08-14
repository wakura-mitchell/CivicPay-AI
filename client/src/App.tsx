import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { Application } from './types/Application';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProdile';
import BillingDetails from './components/Billing/BillingDetails';
import Service from './components/Service';
import { ApplicationList } from './components/Applications/ApplicationList';
import Listing from './components/News/Listing';
import HotContacts from './components/HotContacts';
import Home from './components/Home';

function App() {
    const [applications] = useState<Application[]>([
        {
            businessName: "Sample Business",
            licenseType: "Trading License",
            dateApplied: "2025-08-14",
            status: "Pending"
        }
    ]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <div><Login /></div>
        },
        {
            path: '/register',
            element: <div><Register /></div>
        },
        {
            path: '/dashboard',
            element: <div><Dashboard /></div>,
            children: [
                { path: 'home', element: <Home /> },
                { path: 'user-licenses', element: <Service /> },
                { path: 'applications', element: <ApplicationList applications={applications} /> },
                { path: 'news', element: <Listing /> },
                { path: 'services', element: <Service /> },
                { path: 'user-profile', element: <UserProfile /> },
                { path: 'billing-details', element: <BillingDetails /> },
                { path: 'hot-contacts', element: <HotContacts /> },
                { path: '', element: <Home /> }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            />
        </div>
    );
}

export default App;
