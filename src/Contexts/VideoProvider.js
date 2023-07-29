import { createContext, useContext, useReducer } from "react";
import { videos } from "../Database/videoData";
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
                  notes: [...video?.notes, videoState.note],
                }
              : video
          ),
        };
      case "STORE_NOTE":
        return { ...videoState, note: action.payload };
      // case "STORE_NOTE":
      //   return {
      //     ...videoState,
      //     allVideos: videoState.allVideos.map((video) =>
      //       video._id === Number(action.idPayload)
      //         ? {
      //             ...video,
      //             notes: [...video?.notes, { content: action.payload }],
      //           }
      //         : video
      //     ),
      //   };
      default:
        return videoState;
    }
  };
  const initialState = {
    allVideos: videos.map((video) => ({ ...video, notes: [] })),
    filteredVideos: videos,
    watchLater: [],
    note: "",
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const isVideoInWatchLater = (_id) =>
    videoState.watchLater.find((video) => video._id === _id);
  console.log(videoState);
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, isVideoInWatchLater }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export const useVideos = () => useContext(VideoContext);
