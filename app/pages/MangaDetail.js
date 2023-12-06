import React, { useState, useEffect } from 'react';

const fetchMangaById = async (id) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching manga by ID:', error);
  }
};

const MangaDetail = ({ mangaId }) => {
  const [manga, setManga] = useState(null);

  useEffect(() => {
    const loadMangaById = async () => {
      const mangaData = await fetchMangaById(mangaId);
      setManga(mangaData);
    };

    loadMangaById();
  }, [mangaId]);

  return (
    <div>
      <h1>Manga Detail</h1>
      {manga ? (
        <div>
          <h2>{manga.title}</h2>
          <img src={manga.image_url} alt={manga.title} />
          <p>{manga.synopsis}</p>
          <p>Type: {manga.type}</p>
          <p>Status: {manga.status}</p>
          <p>Chapters: {manga.chapters}</p>
          <p>Volumes: {manga.volumes}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default MangaDetail;
