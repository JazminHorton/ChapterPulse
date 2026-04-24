"use client";
import React from 'react';
import { useUserAuth } from "../_utils/auth-context"; 
import Link from 'next/link';

const LandingPage = () => {
    // 1. Updated to match the new generic functions from auth-context.js
    const { user, login, logout } = useUserAuth();

    return (
        <main>
        <div 
            style={{ 
                backgroundColor: 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} 
            className="absolute inset-0 flex justify-center items-center"
        >
            <div className="relative w-full overflow-hidden rounded-2xl max-w-lg bg-gray-200 shadow-inner p-8 mx-auto text-center shadow-xl">
                {!user ? (
                    <>
                        <h1 className="text-6xl text-orange-600 mb-4">Log In </h1>
                        <div className="flex flex-col items-center space-y-4 bg-white p-4 rounded-2xl shadow-inner shadow-xl border border-purple-600">
                            <p className="text-xl text-black">Please log in to access ChapterPulse.</p>
                            
                            {/* 2. Swapped gitHubSignIn for our generic login */}
                            <button 
                                onClick={login} 
                                className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                            >
                                Log In (Dev Mode)
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center space-y-4 bg-white p-4 rounded-2xl shadow-inner">
                            {/* 3. Updated to use the mock user.name we set in the context */}
                            <p className="text-xl text-black">Welcome, {user.name} to ChapterPulse!</p>
                            
                            {/* 4. Swapped firebaseSignOut for our generic logout */}
                            <button 
                                onClick={logout} 
                                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                            >
                                Log Out
                            </button>
                        </div>
                        <div className="mt-4">
                            <Link href="/">
                                  <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                                    Home
                                    </div>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    </main>
    );
}

export default LandingPage;