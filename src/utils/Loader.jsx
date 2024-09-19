import React from 'react';

const Loader = () => {
    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
                <h1 className="text-xl font-semibold text-gray-700 mt-4">Loading...</h1>
                <p className="text-gray-500 mt-2">Please wait while we fetch the data.</p>
            </div>
        </main>
    );
};

export default Loader;
