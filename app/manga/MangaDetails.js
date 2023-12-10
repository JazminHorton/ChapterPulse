// components/MangaDetails.js
import React from 'react';

const MangaDetails = ({ manga }) => {
  return (
    <div className="manga-details">
      <img src={manga.imageUrl} alt={manga.title} className="manga-cover" />
      <div className="manga-info">
        <h2 className="manga-title">{manga.title}</h2>
        <p className="manga-description">{manga.description}</p>
        <p className="manga-author">{manga.author}</p>
        <p className="manga-chapters">Chapters: {manga.chapters}</p>
        {/* Add more details as needed */}
      </div>

      <style jsx>{`
        .manga-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 20px;
          margin-top: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-color: #000;
        }

        .manga-cover {
          max-width: 200px;
          height: auto;
          border-radius: 4px;
        }

        .manga-info {
          flex: 1;
          margin-left: 20px;
        }

        .manga-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .manga-description {
          margin-bottom: 12px;
          color: #555;
        }

        .manga-author,
        .manga-chapters {
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </div>
  );
};
export default MangaDetails;
