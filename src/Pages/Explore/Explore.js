import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useVideos } from "../../Contexts/VideoProvider";
import "./explore.css";
export const Explore = () => {
  const { videoState, videoDispatch } = useVideos();

  return (
    <div className="page">
      <h1>Explore</h1>
      <input
        onChange={(event) =>
          videoDispatch({ type: "FILTER_VIDEOS", payload: event.target.value })
        }
      />
      <i class="fa-solid fa-magnifying-glass search"></i>
      {videoState?.filteredVideos?.length ? (
        <div className="videos">
          {videoState?.filteredVideos?.map((video) => (
            <VideoCard {...video} />
          ))}
        </div>
      ) : (
        <h2>No Videos Found.</h2>
      )}
    </div>
  );
};
