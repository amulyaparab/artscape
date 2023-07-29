import { useNavigate } from "react-router-dom";
import { useCategory } from "../../Contexts/CategoryProvider";
import "./home.css";
export const Home = () => {
  const { categoryState } = useCategory();
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="heading">Home</h1>
      <div className="categories">
        {categoryState.categories.map(({ _id, thumbnail, src, category }) => (
          <div className="category" key={_id}>
            <img
              onClick={() => navigate(`/videos/${category}`)}
              src={thumbnail}
              alt={category}
            />
            <h3>{category}</h3>
            {/* <iframe
            width="560"
            height="315"
            src={src}
            frameborder="0"
            allowfullscreen
          ></iframe> */}
          </div>
        ))}
      </div>
    </div>
  );
};
// _id: uuid(),
// thumbnail:
//   "https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg",
// src: "https://www.youtube.com/embed/D6QM3Xed2J0",
// category: "Origami",
