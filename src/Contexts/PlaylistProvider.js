import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { useVideos } from "./VideoProvider";
const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const { videoState } = useVideos();
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
            videos: [],
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
            videos: [],
          },
        };
      case "DELETE_FROM_PLAYLISTS":
        return {
          ...playlistState,
          playlists: playlistState.playlists.filter(
            (playlist) => playlist._id !== action.payload
          ),
        };
      case "STORE_ID":
        return { ...playlistState, videoId: action.payload };
      case "ADD_VIDEO_TO_PLAYLIST":
        if (playlistState.videoId) {
          return {
            ...playlistState,
            playlists: playlistState.playlists.map((playlist) =>
              playlist._id === action.payload
                ? {
                    ...playlist,
                    videos: [
                      ...playlist.videos,
                      videoState.allVideos.find(
                        (video) => video._id === Number(playlistState.videoId)
                      ),
                    ],
                  }
                : playlist
            ),
            videoId: "",
          };
        }

      default:
        return playlistState;
    }
  };
  const initialState = {
    playlists: [],
    videoId: "",
    singlePlaylist: {
      _id: "",
      playlistThumbnail: "https://picsum.photos/300/200",
      name: "",
      description: "",
      videos: [],
    },
  };
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );
  const [showAddPlaylistForm, setShowAddPlaylistForm] = useState(false);
  console.log(playlistState);

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
