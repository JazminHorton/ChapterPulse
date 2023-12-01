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
Max_manga_ID = 6000; //I don't need all of them, just a lot of them
Min_manga_ID = 1; //need at least 1
Random_manga_ID = Math.floor(Math.random() * (Max_manga_ID - Min_manga_ID + 1)) + Min_manga_ID; //random number between 1 and 6000 (IDEA)
async function FetchRandomManga(id) {
  try {
    const response = await fetch('https://api.jikan.moe/v4/manga/{id}'
    );
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(error);
  }

export default function RandomManga() {
  const [manga, setManga] = useState(null);

  async function LoadRandomManga() {
    const id = Math.floor(Math.random() * (Max_manga_ID - Min_manga_ID + 1)) + Min_manga_ID; //random number between 1 and 6000 (IDEA)
    const newManga = await LoadRandomManga(id);
    setManga(newManga);
  }
  
}