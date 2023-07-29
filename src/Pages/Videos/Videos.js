import { useParams } from "react-router-dom";
import { useVideos } from "../../Contexts/VideoProvider";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
export const Videos = () => {
  const { categoryName } = useParams();

  const { videoState } = useVideos();
  const videosInCurrCategory = videoState?.allVideos?.filter(
    ({ category }) => category === categoryName
  );

  return (
    <div className="page">
      <h1 className="heading">{categoryName} Videos</h1>
      <div className="videos">
        {videosInCurrCategory.map((video) => (
          <VideoCard {...video} category={categoryName} />
        ))}
      </div>
    </div>
  );
};
