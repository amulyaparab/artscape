import { VideoCard } from "../Components/VideoCard/VideoCard";
import { useVideos } from "../Contexts/VideoProvider";

export const Explore = () => {
  const { videoState } = useVideos();

  return (
    <div className="page">
      <h1 className="heading">Explore</h1>
      <div className="videos">
        {videoState?.allVideos?.map((video) => (
          <VideoCard {...video} />
        ))}
      </div>
    </div>
  );
};
