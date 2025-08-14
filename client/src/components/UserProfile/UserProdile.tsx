import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaSave } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import defaultProfilePic from '../../assets/me.jpg';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Wakura Moyo',
        email: 'wakura.moyo@example.com',
        phone: '+263 123 456 789',
        address: 'Masvingo, Zimbabwe',
        profilePicture: defaultProfilePic,
        linkedin: '',
        twitter: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfile((prevProfile) => ({
                    prevProfile,
                    profilePicture: event.target.result,
                })
                );
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full max-w-3xl p-6 m-auto bg-white rounded-lg shadow-lg userProfile">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32">
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="object-cover w-full h-full border rounded-full"
                    />
                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                    )}
                </div>
                <h2 className="mt-4 text-2xl font-bold">{profile.name}</h2>
            </div>

            {/* User Details */}
            <div className="grid gap-4 userDetails">
                <div>
                    <label className="block font-medium text-gray-600">Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    ) : (
                        <p>{profile.email}</p>
                    )}
                </div>
                <div>
                    <label className="block font-medium text-gray-600">Phone:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    ) : (
                        <p>{profile.phone}</p>
                    )}
                </div>
                <div>
                    <label className="block font-medium text-gray-600">Address:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    ) : (
                        <p>{profile.address}</p>
                    )}
                </div>
                <div>
                    <label className="block font-medium text-gray-600">LinkedIn:</label>
                    {isEditing ? (
                        <input
                            type="url"
                            name="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    ) : (
                        <a
                            href={profile.linkedin}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {profile.linkedin || 'Add LinkedIn Link'}
                        </a>
                    )}
                </div>
                <div>
                    <label className="block font-medium text-gray-600">Twitter:</label>
                    {isEditing ? (
                        <input
                            type="url"
                            name="twitter"
                            value={profile.twitter}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    ) : (
                        <a
                            href={profile.twitter}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {profile.twitter || 'Add Twitter Link'}
                        </a>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-6">
                {isEditing ? (
                    <button
                        onClick={() => setIsEditing(false)}
                        className="inline-flex items-center px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700"
                    >
                        <FaSave className="mr-2" />
                        Save Changes
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                    >
                        <MdEdit className="mr-2" />
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
