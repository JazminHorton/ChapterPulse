//IDEA: This is the manga component that will be used to display the manga information
//I have no idea how to do this but I'm gonna try my best
//I might need to ask Aaron for help with this one. 
//I might need to make multiple components for this one. Like one for the manga information and one for the manga list.
//One for the manga information that will be used in the search page and one for the manga list that will be used in the list page.
//This is a bit more complicated than I thought, plus it's more work than the assignment.
//I'm not sure if I'll be able to finish this in time. If not, I'll just ask Aaron if I can just hard code some manga in there as examples.


"use client";
import React, { useState, useEffect } from 'react';

//when the user clicks on the button, it will display a random manga from the API and it's information
MAX_QUOTE_ID = 6000; //I don't need all of them, just a lot of them
MIN_QUOTE_ID = 1; //need at least 1
async function fetchManga(id) {
  try {
    const response = await fetch('https://api.jikan.moe/v4/manga/{id}'
    );
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(error);
  }
}

export default function RandomManga() {
  const [manga, setManga] = useState(null);

  async function loadRandomManga() {
    const id = Math.floor(Math.random() * (MAX_QUOTE_ID - MIN_QUOTE_ID + 1) + MIN_QUOTE_ID);
    const newQuote = await fetchManga(id);
    newManga.id = id;
    setManga(newManga);
  }
  useEffect(() => {
    loadRandomManga();
  }, []);

  return (
    <section>
      <Heading title="Try your luck and see what story you get!" />
      {quote ? (
        <Manga manga={manga} onAddFavourite={onAddFavourite} />
      ) : (
        "Loading..."
      )}
      <button
        className="mt-4 px-4 py-2 w-full rounded-md bg-gray-300 hover:bg-emerald-300"
        onClick={loadRandomManga}
      >
        Next Manga
      </button>
    </section>
  );
}

