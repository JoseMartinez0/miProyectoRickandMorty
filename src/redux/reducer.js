import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state, //filter retorna un nuevo array.
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ), //Vamos a modificar myFavorites, ahora myFavorites va a ser un array donde nos vamos a quedar con todos los favoritos que su id sea distinto al id que me mandan por payload.   fav=>(vamos a recorrer a c/favorite)
      };

    default:
      return { ...state };
  }
};

export default reducer;
