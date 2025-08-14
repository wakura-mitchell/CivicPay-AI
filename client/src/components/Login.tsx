import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldFill } from 'react-icons/bs';
import video from '../assets/e-solutions.mp4';
import logo from '../assets/logo.jpg';

const Login = () => {
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigateTo = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginUserName === 'admin' && loginPassword === '1234') {
            setLoginStatus('Login successful!');
            navigateTo('/dashboard');
        } else {
            setLoginStatus('Invalid username or password');
        }
    };

    useEffect(() => {
        if (loginStatus) {
            setTimeout(() => setLoginStatus(''), 3000);
        }
    }, [loginStatus]);

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
                    <h2 className="text-2xl font-bold text-gray-700">Welcome Back!</h2>
                    <p className="text-sm text-gray-500 mb-6">Sign in to manage your account</p>
                </div>
                <div className={`${loginStatus ? 'text-red-500' : ''} text-center mb-4 font-semibold`}>
                    {loginStatus}
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <FaUserShield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                        <input
                            type="text"
                            placeholder="Username or License ID"
                            onChange={(e) => setLoginUserName(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-blue-500"
                        />
                    </div>
                    <div className="relative">
                        <BsFillShieldFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
