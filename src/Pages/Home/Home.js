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
          </div>
        ))}
      </div>
    </div>
  );
};
