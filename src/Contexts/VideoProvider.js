import { createContext, useContext, useReducer } from "react";
import { videos } from "../Database/videoData";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const videoReducer = (videoState, action) => {
    switch (action.type) {
      case "ADD_TO_WATCH_LATER":
        return {
          ...videoState,
          watchLater: [
            ...videoState.watchLater,
            videoState.allVideos.find(({ _id }) => _id === action.payload),
          ],
        };
      case "REMOVE_FROM_WATCH_LATER":
        return {
          ...videoState,
          watchLater: videoState.watchLater.filter(
            ({ _id }) => _id !== action.payload
          ),
        };
      case "FILTER_VIDEOS":
        return {
          ...videoState,
          filteredVideos: videoState.allVideos.filter((video) =>
            video.title
              .toLowerCase()
              .includes(action.payload.toLowerCase().trim())
          ),
        };
      case "ADD_NOTES":
        return {
          ...videoState,
          allVideos: videoState.allVideos.map((video) =>
            video._id === Number(action.idPayload)
              ? {
                  ...video,
                  notes: [
                    ...video?.notes,
                    { content: videoState.note, _id: uuid() },
                  ],
                }
              : video
          ),
          note: "",
        };
      case "DELETE_NOTE":
        return {
          ...videoState,
          allVideos: videoState.allVideos.map((video) =>
            video._id === Number(action.idPayload)
              ? {
                  ...video,
                  notes: video?.notes?.filter(
                    (note) => note._id !== action.payload
                  ),
                }
              : video
          ),
        };
      case "GIVE_EDIT_VALUE":
        // console.log(
        //   videoState.allVideos
        //     .find((video) => video._id === Number(action.idPayload))
        //     ?.notes?.find((note) => note._id === action.payload)?.content,
        //   "lifa"
        // );
        return {
          ...videoState,
          note: videoState.allVideos
            .find((video) => video._id === Number(action.idPayload))
            ?.notes?.find((note) => note._id === action.payload)?.content,

          noteId: action.payload,
        };
      case "NOTE_ID":
        return { ...videoState, noteId: action.payload };
      case "EDIT_NOTE":
        return {
          ...videoState,
          allVideos: videoState.allVideos.map((video) =>
            video._id === Number(action.idPayload)
              ? {
                  ...video,
                  notes: video.notes.map((note) =>
                    note._id === videoState?.noteId
                      ? { ...note, content: videoState.note }
                      : note
                  ),
                }
              : video
          ),
          note: "",
          noteId: "",
        };
      case "STORE_NOTE":
        return { ...videoState, note: action.payload };

      default:
        return videoState;
    }
  };
  const initialState = {
    allVideos:
      JSON.parse(localStorage.getItem("allVideos")) ||
      videos.map((video) => ({ ...video, notes: [] })),
    filteredVideos: videos,
    watchLater: JSON.parse(localStorage.getItem("watchLater")) || [],
    noteId: "",
    note: "",
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const isVideoInWatchLater = (_id) =>
    videoState.watchLater.find((video) => video._id === _id);

  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(videoState.watchLater));
  }, [videoState.watchLater]);
  useEffect(() => {
    localStorage.setItem("allVideos", JSON.stringify(videoState.allVideos));
  }, [videoState.allVideos]);
  console.log(videoState.noteId);
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, isVideoInWatchLater }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export const useVideos = () => useContext(VideoContext);
