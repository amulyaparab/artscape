import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SideNav } from "./Components/SideNav/SideNav";
import { Home } from "./Pages/Home";
import { Explore } from "./Pages/Explore";
import { Playlists } from "./Pages/Playlists";
import { Videos } from "./Pages/Videos";
import { WatchLater } from "./Pages/WatchLater";
import { SingleVideo } from "./Pages/SingleVideo";
import { SinglePlaylist } from "./Pages/SinglePlaylist";
function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/allPlaylists" element={<Playlists />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/singlePlaylist" element={<SinglePlaylist />} />
        <Route path="/singleVideo" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
