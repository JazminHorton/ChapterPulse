// components/MangaList.js
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const MangaList = () => {
  const [mangaList, setMangaList] = useState([
    {
      id: 1,
      title: 'Magus of the Library',
      author: 'Mitsu Izumi',
      chapters: 29,
      volumes: 7,
      status: 'Reading',
      imageUrl: 'https://www.uk-anime.net/Images/magus-top.png?width=610&height=350&mode=crop',
      rating: 10,
      comments: 'Masterpiece!!',
    },
    {
      id: 2,
      title: 'Shadows House',
      author: 'Sōmatō',
      chapters: 50,
      volumes: 10,
      status: 'Reading',
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx104063-ycQHMGvfoET1.png',
      rating: 9,
      comments: 'One of the best mystery manga out there!',
    },
    // Add more manga items as needed
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editManga, setEditManga] = useState({
    id: null,
    title: '',
    author: '',
    chapters: 0,
    volumes: 0,
    status: '',
    imageUrl: '',
    rating: 0,
    comments: '',
  });

  const [sortOption, setSortOption] = useState(null);

  const handleSort = (option) => {
    setSortOption(option);
    setMangaList((prevList) => {
      let sortedList = [...prevList];
      if (option === 'status') {
        sortedList.sort((a, b) => a.status.localeCompare(b.status));
      } else if (option === 'rating') {
        sortedList.sort((a, b) => b.rating - a.rating);
      } else if (option === 'title') {
        sortedList.sort((a, b) => a.title.localeCompare(b.title));
      }
      return sortedList;
    });
  };
  

  const handleEdit = (manga) => {
    setEditManga(manga);
    setIsEditing(true);
  };

  const handleDelete = (mangaId) => {
    const updatedList = mangaList.filter((manga) => manga.id !== mangaId);
    setMangaList(updatedList);
  };

  const handleSave = () => {
    if (isAdding) {
      const newManga = { id: Date.now(), ...editManga };
      setMangaList([...mangaList, newManga]);
    } else {
      const updatedList = mangaList.map((manga) =>
        manga.id === editManga.id ? editManga : manga
      );
      setMangaList(updatedList);
    }

    setIsAdding(false);
    setIsEditing(false);
    setEditManga({
      id: null,
      title: '',
      author: '',
      chapters: 0,
      volumes: 0,
      status: '',
      imageUrl: '',
      rating: 0,
      comments: '',
    });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">My Manga List</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setIsAdding(true);
              setIsEditing(false);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Manga
          </button>
          <span className="mr-4">Sort By:</span>
          <button onClick={() => handleSort('status')} className="mr-2 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Status
          </button>
          <button onClick={() => handleSort('rating')} className="mr-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Rating
          </button>
          <button onClick={() => handleSort('title')} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Title</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <Link href="/">
              Home
            </Link>
          </button>
        </div>
      </div>

      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Add Manga</h2>

            <div className="mb-4">
              <label htmlFor="title" className="block text-black font-bold mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={editManga.title}
                onChange={(e) => setEditManga({ ...editManga, title: e.target.value })}
                className="w-full border border-gray-300 text-black rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="author" className="block text-black font-bold mb-1">
                Author
              </label>
              <input
                type="text"
                id="author"
                value={editManga.author}
                onChange={(e) => setEditManga({ ...editManga, author: e.target.value })}
                className="w-full border border-gray-300 text-black rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="chapters" className="block text-black font-bold mb-1">
                Chapters
              </label>
              <div className="flex items-center text-black">
                <input
                  type="number"
                  id="chapters"
                  value={editManga.chapters}
                  onChange={(e) => setEditManga({ ...editManga, chapters: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  onClick={() => setEditManga({ ...editManga, chapters: editManga.chapters + 1 })}
                  className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600 pl-2"
                >
                  +
                </button>
                <button
                  onClick={() => setEditManga({ ...editManga, chapters: Math.max(0, editManga.chapters - 1) })}
                  className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600 ml-1 pl-2"
                >
                  -
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="volumes" className="block text-black font-bold mb-1">
                Volumes
              </label>
              <div className="flex items-center text-black">
                <input
                  type="number"
                  id="volumes"
                  value={editManga.volumes}
                  onChange={(e) => setEditManga({ ...editManga, volumes: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  onClick={() => setEditManga({ ...editManga, volumes: editManga.volumes + 1 })}
                  className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600 pl-2"
                >
                  +
                </button>
                <button
                  onClick={() => setEditManga({ ...editManga, volumes: Math.max(0, editManga.volumes - 1) })}
                  className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600 ml-1 pl-2"
                >
                  -
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-black font-bold mb-1">
                Status
              </label>
              <select
                id="status"
                value={editManga.status}
                onChange={(e) => setEditManga({ ...editManga, status: e.target.value })}
                className="w-full border border-gray-300 text-black rounded-md p-2"
              >
                <option value="Reading">Reading</option>
                <option value="On Hold">On Hold</option>
                <option value="Dropped">Dropped</option>
              </select>
            </div>

            {/* ... (remaining input fields) */}

            <button
              onClick={() => {
                setIsAdding(false);
                setEditManga({
                  id: null,
                  title: '',
                  author: '',
                  chapters: 0,
                  volumes: 0,
                  status: '',
                  imageUrl: '',
                  rating: 0,
                  comments: '',
                });
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Save
            </button>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Edit Manga</h2>
            {/* ... (add your input fields for editing manga) */}
            <button
              onClick={() => {
                setIsEditing(false);
                setEditManga({
                  id: null,
                  title: '',
                  author: '',
                  chapters: 0,
                  volumes: 0,
                  status: '',
                  imageUrl: '',
                  rating: 0,
                  comments: '',
                });
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Save
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mangaList.map((manga) => (
          <div key={manga.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={manga.imageUrl}
              alt={`${manga.title} Cover`}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold text-black">{manga.title}</h2>
            <p className="text-black">Author: {manga.author}</p>
            <p className="text-black">Chapters: {manga.chapters}</p>
            <p className="text-black">Volumes: {manga.volumes}</p>
            <p className="text-black">Status: {manga.status}</p>
            <p className="text-black">Rating: {manga.rating}</p>
            <p className="text-black">Comments: {manga.comments}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(manga)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(manga.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaList;