import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { div } from "framer-motion/client";


const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        const prefillEmail = searchParams.get("email");
        if (prefillEmail) {
            setEmail(prefillEmail)
        };
    }, [searchParams]);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        setError("");

        try {
            await resetPassword(email);

            // Redirect / open Gmail in a new tab
            window.open("https://mail.google.com", "_blank");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="py-6 bg-[#bdd7e7]">
            <div className="max-w-md mx-auto my-auto mt-20 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
                <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 cursor-pointer text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Reset Password
                    </button>
                </form>

                {error && <p className="text-red-600 mt-4">{error}</p>}
                <p className="text-gray-500 text-sm mt-4">
                    You will receive a password reset email if the account exists.
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
