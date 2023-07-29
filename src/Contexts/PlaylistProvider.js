import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const playlistReducer = (playlistState, action) => {
    switch (action.type) {
      case "PLAYLIST_NAME":
        return {
          ...playlistState,
          singlePlaylist: {
            ...playlistState.singlePlaylist,
            name: action.payload,
          },
        };
      case "PLAYLIST_DESCRIPTION":
        return {
          ...playlistState,
          singlePlaylist: {
            ...playlistState.singlePlaylist,
            description: action.payload,
          },
        };
      case "CLEAR_FORM":
        return {
          ...playlistState,
          singlePlaylist: {
            _id: "",
            playlistThumbnail: "https://picsum.photos/300/200",
            name: "",
            description: "",
          },
        };
      case "CREATE_PLAYLIST":
        return {
          ...playlistState,
          playlists: [
            ...playlistState.playlists,
            { ...playlistState.singlePlaylist, _id: uuid() },
          ],
          singlePlaylist: {
            playlistThumbnail: "https://picsum.photos/300/200",
            name: "",
            description: "",
          },
        };
      case "DELETE_FROM_PLAYLISTS":
        return {
          ...playlistState,
          playlists: playlistState.playlists.filter(
            (playlist) => playlist._id !== action.payload
          ),
        };
      default:
        return playlistState;
    }
  };
  const initialState = {
    playlists: [],
    singlePlaylist: {
      _id: "",
      playlistThumbnail: "https://picsum.photos/300/200",
      name: "",
      description: "",
    },
  };
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );
  const [showAddPlaylistForm, setShowAddPlaylistForm] = useState(false);
  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        playlistDispatch,
        showAddPlaylistForm,
        setShowAddPlaylistForm,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export const usePlaylist = () => useContext(PlaylistContext);
