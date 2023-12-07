// components/Profile.js
"use client"
import React from 'react';
import Link from 'next/link';

const Profile = () => {
    const containerStyle = {
        backgroundImage: 'url("https://64.media.tumblr.com/3e49ab707747e5b1aff5b530221c1aae/tumblr_o7srycOJ9K1vupf7jo1_640.gif")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };

  return (
    <div className='flex min-h-screen' style={containerStyle}>
    <div className="container mx-auto p-8">
    <Link legacyBehavior href="/">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Home
        </a>
    </Link>
      <div className="flex items-center justify-center">
        <img
          src="https://i.pinimg.com/236x/ab/37/26/ab3726e8c3b97fd86793a1db66701788.jpg"
          alt="Profile Image"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h1 className="text-4xl font-bold text">Raverz</h1>
          <p className="text-500">Manga Connoisseur</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-700">
          I've been reading manga for most of my life. I love nearly all genres and am passionate about my favourite stories and characters!.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <ul className="list-none p-0">
          <li className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            john.doe@example.com
          </li>
          <li className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 12h-4l-3 9L9 3l-3 9H2"
              />
            </svg>
            (123) 456-7890
          </li> 
        </ul>
        </div>
      </div>
    </div>
  );
};
//Many add a log out button here
export default Profile;
