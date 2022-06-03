import { ADD_MOVIE } from './actiontypes';

const initialState = {
  movieList: [],
  
}

const movieReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {...state, 
          //  name: action.payload  
        movieList: state.movieList.concat(
          action.payload
          // key: Math.random(),
          // name: action.payload
        )
      };
    default:
      return state;
  }
}

export default movieReducer;