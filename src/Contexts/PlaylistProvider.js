import { createContext, useContext, useReducer } from "react";
import { categories } from "../Database/categories";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const playlistReducer = (playlistState, action) => {
    switch (action.type) {
      default:
        return playlistState;
    }
  };
  const initialState = {
    categories: categories,
  };
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};
export const usePlaylist = () => useContext(PlaylistContext);
