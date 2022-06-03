import { ADD_MOVIE } from './actiontypes';

export const addMovie = (movie) => (
  {
    type: ADD_MOVIE,
    payload: movie
  }
);