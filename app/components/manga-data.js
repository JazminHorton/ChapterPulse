//IDEA: This is the manga component that will be used to display the manga information
//I have no idea how to do this but I'm gonna try my best
//I might need to ask Aaron for help with this one. 
//I might need to make multiple components for this one. Like one for the manga information and one for the manga list.
//One for the manga information that will be used in the search page and one for the manga list that will be used in the list page.
//This is a bit more complicated than I thought, plus it's more work than the assignment.
//I'm not sure if I'll be able to finish this in time. If not, I'll just ask Aaron if I can just hard code some manga in there as examples.


"use client";
import React, { useState, useEffect } from 'react';

async function getMangaById() {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/manga/{id}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const mangaDetails = data.meals.map((meal) =>
        fetch(
          `https://api.jikan.moe/v4/manga/'`
        ).then((res) => res.json())
      );

      const mealDetails = await Promise.all(mangaDetails);
      return mealDetails.map((detail) => detail.meals[0]);
    }
    return [];
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error.message);
    throw error;
  }
}
