import { NavLink } from "react-router-dom";
import "./sidenav.css";
export const SideNav = () => {
  return (
    <>
      <h1>SideNav</h1>
      <div className="side-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/allPlaylists">Playlists</NavLink>
        <NavLink to="/watchLater">Watch Later</NavLink>
      </div>
    </>
  );
};
