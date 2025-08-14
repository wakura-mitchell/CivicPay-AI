import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldFill } from 'react-icons/bs';
import { FaUserShield } from 'react-icons/fa';
import video from '../assets/e-solutions.mp4';
import logo from '../assets/logo.jpg';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (email && userName && password) {
            alert('Registration successful!');
            navigateTo('/');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Video Background */}
            <video
                src={video}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 h-full w-full object-cover -z-10"
            ></video>
            {/* Dim Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 -z-10"></div>

            {/* Form Section */}
            <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 backdrop-blur-md w-[90%] max-w-md">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-20 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-700">Create Your Account</h2>
                    <p className="text-sm text-gray-500 mb-6">Register to access the portal</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="relative">
                        <MdMarkEmailRead className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-green-500"
                        />
                    </div>
                    <div className="relative">
                        <FaUserShield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-green-500"
                        />
                    </div>
                    <div className="relative">
                        <BsFillShieldFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4 text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/" className="text-green-500 hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
