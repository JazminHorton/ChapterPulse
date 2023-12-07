// components/MangaCarousel.js
"use client";
import React, { useState } from 'react';
import MangaDetails from './MangaDetails'; // Assuming you have a MangaDetails component
import Link from 'next/link';

const mangaList = [
  // Hard-coded manga details
  {
    title: 'We Shall Now Begin Ethics',
    description:
      '"Ethics" is the path of humanity, a principle that becomes the norm of morality. Learning is not a problem in the future. But this class is filled with the truth of life. Cool ethics teachers Takayanagi confronts the problems of students and their own stance. New Age, teacher story!!',
    imageUrl:
      'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx104780-FOjQn11oURnd.jpg',
    author: 'Kanata Konami',
    chapters: 38,
    // ... other details
  },
  {
    title: 'Boys Abyss',
    description: 'In a town with nothing, in the middle of a daily life with seemingly no signs of change, high schooler Reiji Kurose was "just" living. Family, dreams for the future, childhood friends. All of them were binding him down to that city. He thought he would "just" keep on living like that. Until he met her. Is there hope in living? Is there light waiting ahead? It is the start of a boy meets girl series which reflects the "now".',
    imageUrl: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx116186-KgIa6Zf6I1iH.jpg",
    author: "Ryou Minenami",
    chapters: 25,
    // ... other details
  },
  {
    title: 'Helck',
    description: 'Helck is the hero that defeated one of the Demon Kings, and in the wake of the Demon Kings death, a new one must be declared. This is achieved through a fighting tournament, where the strongest becomes ruler. Vamirio, one of the Great Demon Kings, discovers that Helck is a participant for the tournament and is so far winning! What could be his motive? If a human becomes the next Demon King, what does that spell for the Demon kingdom?',
    imageUrl: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx86720-hMyIB05OrKRC.jpg",
    author: "Nanao Nanaki",
    chapters: 111,
    // ... other details
  }
  // Add more manga items as needed
];

const MangaCarousel = () => {
  const [currentMangaIndex, setCurrentMangaIndex] = useState(0);

  const goToNextManga = () => {
    const nextIndex = (currentMangaIndex + 1) % mangaList.length;
    setCurrentMangaIndex(nextIndex);
  };

  const goToPrevManga = () => {
    const prevIndex = (currentMangaIndex - 1 + mangaList.length) % mangaList.length;
    setCurrentMangaIndex(prevIndex);
  };

  return (
    <div className="manga-carousel">
      <div className="manga-details-container">
        <MangaDetails manga={mangaList[currentMangaIndex]} />
      </div>
      <div className="navigation-buttons">
        <button
          onClick={goToPrevManga}
          className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 mr-2"
        >
          &lt; Prev
        </button>
        <button
          onClick={goToNextManga}
          className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
        >
          Next &gt;
        </button>
      </div>
      <div className="Header-Buttons flex justify-between mb-4">
      <Link legacyBehavior href="/">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
        Home
        </a>
        </Link>
        <Link legacyBehavior href="/mangaList">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Your List
        </a>
        </Link>
      </div>  

      <style jsx>{`
        .manga-carousel {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .manga-details-container {
          width: 80%;
          max-width: 600px;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          padding: 20px;
        }
        .Header-Buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding: 20px;            
      `}</style>
    </div>
  );
};

export default MangaCarousel;
