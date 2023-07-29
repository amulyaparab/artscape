import { useNavigate } from "react-router-dom";
import { useCategory } from "../../Contexts/CategoryProvider";
import "./videoCard.css";
import { useVideos } from "../../Contexts/VideoProvider";
export const VideoCard = ({
  _id,
  title,
  views,
  chips,
  thumbnail,
  src,
  category,
  creator,
}) => {
  const { categoryState } = useCategory();
  const { videoDispatch, isVideoInWatchLater } = useVideos();
  const findCategory = categoryState.categories.find(
    (currCategory) => currCategory.category === category
  );
  const navigate = useNavigate();

  return (
    <div
      className="video-card"
      onClick={() => {
        console.log("hidf");
        navigate(`/singleVideo/${_id}`);
      }}
    >
      <img className="video-img" src={thumbnail} alt={title} />
      <div
        className="watch-later-icon"
        onClick={(e) => {
          e.stopPropagation();
          isVideoInWatchLater(_id)
            ? videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: _id })
            : videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: _id });
        }}
      >
        {isVideoInWatchLater(_id) ? (
          <i class="fa-solid fa-clock"></i>
        ) : (
          <i class="fa-regular fa-clock"></i>
        )}
      </div>

      <div className="details">
        <img
          className="creator-img"
          src={findCategory.thumbnail}
          alt={category}
        />

        <div>
          <h4>{title}</h4>
          <p>
            {views} views | {creator}
          </p>
        </div>
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
