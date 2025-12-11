import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const UpdateProfile = () => {

    const { user, updateUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!displayName || !photoURL) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            await updateUser({ displayName, photoURL });
            setMessage("Profile updated successfully!");
            setTimeout(() => {
                navigate("/userDetails");
            }, 1200);
        } 
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="bg-[#bdd7e7] py-6 md:py-16">
            <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
                    >
                        Update Profile
                    </button>
                </form>

                {
                    message &&
                    <p className="text-green-600 mt-4">{message}</p>
                }

                {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default UpdateProfile;
