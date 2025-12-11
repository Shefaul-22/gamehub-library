import React from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
    return (
        <section className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] py-12 px-4 sm:px-6 lg:px-20">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

              
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Join Our Gaming Community
                    </h2>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        Subscribe to our newsletter and get the latest updates on games, offers, and exclusive content!
                    </p>
                </div>

                {/* Form  */}
                <form
                    className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative w-full sm:flex-1">
                        <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-full px-12 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition shadow-sm text-sm sm:text-base"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform shadow-lg text-sm sm:text-base"
                    >
                        Subscribe
                    </button>
                </form>


            </div>
            
        </section>
    );
};

export default NewsLetter;
