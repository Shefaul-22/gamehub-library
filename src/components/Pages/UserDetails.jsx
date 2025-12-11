import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const UserDetails = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/updateProfile'); 
    };

    return (
        <div className='bg-white'>
            <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-2xl p-8 sm:p-12 my-8 mt-24">
                
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-6 ">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/100"}
                        alt={user.displayName || "User Avatar"}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
                    />

                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {user.displayName || "No Name"}
                        </h2>
                        <p className="text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-400 mt-1">
                            {user.emailVerified ? "Email Verified" : "Email Not Verified"}
                        </p>

                        {/* Update Button */}
                        <button
                            onClick={handleUpdateProfile}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* User details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-500">UID</h3>
                        <p className="mt-1 text-gray-900 text-sm">{user.uid}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-500">Phone</h3>
                        <p className="mt-1 text-gray-900 text-sm">{user.phoneNumber || "N/A"}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-500">Provider</h3>
                        <p className="mt-1 text-gray-900 text-sm">{user.providerId}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-500">Last Sign-In</h3>
                        <p className="mt-1 text-gray-900 text-sm">{user.metadata?.lastSignInTime}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-500">Created At</h3>
                        <p className="mt-1 text-gray-900 text-sm">{user.metadata?.creationTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
