import { VideoCard } from "../Components/VideoCard/VideoCard";
import { useVideos } from "../Contexts/VideoProvider";

export const WatchLater = () => {
  const { videoState } = useVideos();
  return (
    <div className="page">
      <h1>Watch Later</h1>
      {videoState?.watchLater?.length ? (
        <div className="videos">
          {videoState?.watchLater?.map((video) => (
            <VideoCard {...video} />
          ))}
        </div>
      ) : (
        <h2>No Videos Found Here. Add videos you want to see later.</h2>
      )}
    </div>
  );
};
