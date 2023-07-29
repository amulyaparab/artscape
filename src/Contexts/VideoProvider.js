import { createContext, useContext, useReducer } from "react";
import { videos } from "../Database/videoData";
const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const videoReducer = (videoState, action) => {
    switch (action.type) {
      default:
        return videoState;
    }
  };
  const initialState = {
    allVideos: videos,
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
export const useVideos = () => useContext(VideoContext);
