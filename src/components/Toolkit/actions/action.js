import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("user/getData", async () => {
  try {
    let response = await fetch(
      "https://www.cricbuzz.com/api/cricket-match/commentary/66299"
    );
    const data = await response.json();
    // console.log("🚀 ~ getData ~ data:", data);
    return data;
  } catch (error) {
    console.log("🚀 ~ getData ~ error:", error);
  }
});

export const getDogsData = createAsyncThunk("dogs", async () => {
  try {
    let res = await fetch(
      `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all`
    );

    const data = res.json();
    return data;
  } catch (error) {
    console.log("🚀 ~ getDogsData ~ error:", error);
  }
});

export const getMoviesData = createAsyncThunk("imdb/movies", async () => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: "game of thr" },
    headers: {
      "X-RapidAPI-Key": "938e160336msh92d0e6bfdbb8eecp15c513jsnd5685d99ff32",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    let res = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "938e160336msh92d0e6bfdbb8eecp15c513jsnd5685d99ff32",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      }
    );

    const data = res.json();
    console.log("🚀 ~ getMoviesData ~ data:", data);
    return data;
  } catch (error) {
    console.log("🚀 ~ getMoviesData ~ error:", error);
  }
});

export const getJokesData = createAsyncThunk("/jokes", async () => {
  try {
    let res = await fetch(
      `https://v2.jokeapi.dev/joke/Any?type=single`
    );

    let data = await res.json();
    // console.log("🚀 ~ getJokesData ~ data:", data)
    return data;
  } catch (error) {
    console.log("🚀 ~ getJokesData ~ error:", error);
  }
});
