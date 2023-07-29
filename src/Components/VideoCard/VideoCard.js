import { useCategory } from "../../Contexts/CategoryProvider";
import "./videoCard.css";
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
  const findCategory = categoryState.categories.find(
    (currCategory) => currCategory.category === category
  );
  return (
    <div className="video-card">
      <img className="video-img" src={thumbnail} alt={title} />
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
