// components/MangaList.js
"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

const MangaList = () => {
  const [mangaList, setMangaList] = useState([
    {
      id: 1,
      title: 'One Piece',
      author: 'Eiichiro Oda',
      chapters: 1043,
      volumes: 100,
      status: 'Publishing',
      imageUrl: 'https://example.com/one-piece-cover.jpg',
      rating: 4,
      comments: 'Great series!',
    },
    {
      id: 2,
      title: 'My Hero Academia',
      author: 'Kohei Horikoshi',
      chapters: 345,
      volumes: 34,
      status: 'Publishing',
      imageUrl: 'https://example.com/my-hero-academia-cover.jpg',
      rating: 5,
      comments: 'Awesome characters!',
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

  const openAddMangaModal = () => {
    setIsAdding(true);
    setIsEditing(false);
  };

  const closeAddMangaModal = () => {
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

    closeAddMangaModal();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">My Manga List</h1>

     {/* Home and Add Manga Buttons */}
    <div className="flex justify-between mb-4">
    <button
    onClick={openAddMangaModal}
    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
    Add Manga
    </button>
    <Link legacyBehavior href="/">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Home
        </a>
    </Link>
    </div>

      {/* Manga List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mangaList.map((manga) => (
          <div key={manga.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={manga.imageUrl}
              alt={`${manga.title} Cover`}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold">{manga.title}</h2>
            <p className="text-gray-500">Author: {manga.author}</p>
            <p className="text-gray-500">Chapters: {manga.chapters}</p>
            <p className="text-gray-500">Volumes: {manga.volumes}</p>
            <p className="text-gray-500">Status: {manga.status}</p>
            <p className="text-gray-500">Rating: {manga.rating}</p>
            <p className="text-gray-500">Comments: {manga.comments}</p>

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

      {/* Add Manga Modal */}
      <Modal
        isOpen={isAdding || isEditing}
        onRequestClose={closeAddMangaModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="bg-white p-8 rounded-md">
          <h2 className="text-2xl font-bold mb-4">{isAdding ? 'Add Manga' : 'Edit Manga'}</h2>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={editManga.title}
            onChange={(e) => setEditManga({ ...editManga, title: e.target.value })}
            className="w-full p-2 mb-4 border rounded-md"
          />
          {/* Add more input fields as needed */}
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MangaList;
