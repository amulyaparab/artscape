import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SideNav } from "./Components/SideNav/SideNav";
import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore/Explore";
import { Playlists } from "./Pages/Playlists/Playlists";
import { Videos } from "./Pages/Videos/Videos";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { SingleVideo } from "./Pages/SingleVideo/SingleVideo";
import { SinglePlaylist } from "./Pages/SinglePlaylist/SinglePlaylist";
import { Navbar } from "./Components/Navbar/Navbar";
import { PlaylistForm } from "./Components/PlaylistForm/PlaylistForm";
import { usePlaylist } from "./Contexts/PlaylistProvider";
function App() {
  const { showAddPlaylistForm } = usePlaylist();
  return (
    <>
      <Navbar />
      <div className="App page-divider">
        <SideNav />
        {showAddPlaylistForm && <PlaylistForm />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/allPlaylists" element={<Playlists />} />
          <Route path="/videos/:categoryName" element={<Videos />} />
          <Route path="/watchLater" element={<WatchLater />} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist />} />
          <Route path="/singleVideo/:videoId" element={<SingleVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
