//IDEA: This is the manga component that will be used to display the manga information
//I have no idea how to do this but I'm gonna try my best
//I might need to ask Aaron for help with this one. 
//I might need to make multiple components for this one. Like one for the manga information and one for the manga list.
//One for the manga information that will be used in the search page and one for the manga list that will be used in the list page.
//This is a bit more complicated than I thought, plus it's more work than the assignment.
//I'm not sure if I'll be able to finish this in time. If not, I'll just ask Aaron if I can just hard code some manga in there as examples.


"use client";
import React, { useState, useEffect } from 'react';
import { carousel } from 'react-bootstrap'; //for possible styling of page

//how to show manga like in a home page? Or could just make a 'random manga' page
async function getMangaById(id) {
  try {
    const response = await fetch('https://api.jikan.moe/v4/manga/{id}'
    );
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
}

export default function MangaData() {
  const [manga, setManga] = useState(null);

  useEffect(() => {
    getMangaById().then((manga) => {
      setManga(manga);
    });
  }, []);

  if (!manga) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{manga.title}</h1>
      <p>{manga.synopsis}</p>

    </div>
  );
}