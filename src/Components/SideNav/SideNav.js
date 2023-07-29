import { NavLink } from "react-router-dom";
import "./sidenav.css";
export const SideNav = () => {
  return (
    <>
      <div className="side-nav">
        <NavLink to="/">
          <i class="fa-solid fa-house"></i>Home
        </NavLink>
        <NavLink to="/explore">
          <i class="fa-solid fa-earth-americas"></i>Explore
        </NavLink>
        <NavLink to="/allPlaylists">
          <i class="fa-solid fa-clipboard-list"></i>Playlists
        </NavLink>
        <NavLink to="/watchLater">
          <i class="fa-solid fa-earth-americas"></i>Watch Later
        </NavLink>
      </div>
    </>
  );
};
