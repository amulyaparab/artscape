import { createContext, useContext, useReducer } from "react";
import { videos } from "../Database/videoData";
const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const videoReducer = (videoState, action) => {
    switch (action.type) {
      case "videoDispatch":
        return {
          ...videoState,
          watchLater: [
            ...videoState.watchLater,
            videoState.allVideos.find(({ _id }) => _id === action.payload),
          ],
        };
      default:
        return videoState;
    }
  };
  const initialState = {
    allVideos: videos,
    watchLater: [],
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
export const useVideos = () => useContext(VideoContext);
