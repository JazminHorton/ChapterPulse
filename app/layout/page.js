"use client";
import React from 'react';
import { useUserAuth } from "app/_utils/auth-context"; // Ensure this path is correct.
import Link from 'next/link';

const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main>
        <div 
            style={{ 
                backgroundColor: 'white',
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
                            <button 
                                onClick={gitHubSignIn} 
                                className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                            >
                                <img src="https://cdn.iconscout.com/icon/free/png-256/github-156-675764.png" alt="GitHub Logo" className="w-6 h-6 mr-2" />
                                Login with GitHub
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center space-y-4 bg-white p-4 rounded-2xl shadow-inner">
                            <p className="text-xl text-black">Welcome, {user.displayName} ({user.email}) to ChapterPulse!</p>
                            <button 
                                onClick={firebaseSignOut} 
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