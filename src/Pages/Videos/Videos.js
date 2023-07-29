import { useParams } from "react-router-dom";
import { useVideos } from "../../Contexts/VideoProvider";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

export const Videos = () => {
  const { categoryName } = useParams();

  const { videoState } = useVideos();
  const videosInCurrCategory = videoState?.allVideos?.filter(
    ({ category }) => category === categoryName
  );
  console.log(videosInCurrCategory);
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
// {
//   _id: 33,
//   title: "Sculpting Realistic Portraits - Mastering Human Faces",
//   views: 2251,
//   chips: ["sculpture", "realistic portraits", "clay", "human faces"],
//   thumbnail: "https://picsum.photos/309/174",
//   src: "https://www.youtube.com/embed/GBIIQ0kP15E",
//   category: "Clay Modeling",
//   creator: "PortraitsInClay",
// },
