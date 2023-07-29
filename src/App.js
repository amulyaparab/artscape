import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SideNav } from "./Components/SideNav/SideNav";
import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore";
import { Playlists } from "./Pages/Playlists";
import { Videos } from "./Pages/Videos/Videos";
import { WatchLater } from "./Pages/WatchLater";
import { SingleVideo } from "./Pages/SingleVideo/SingleVideo";
import { SinglePlaylist } from "./Pages/SinglePlaylist";
import { Navbar } from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App page-divider">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/allPlaylists" element={<Playlists />} />
          <Route path="/videos/:categoryName" element={<Videos />} />
          <Route path="/watchLater" element={<WatchLater />} />
          <Route path="/singlePlaylist" element={<SinglePlaylist />} />
          <Route path="/singleVideo/:videoId" element={<SingleVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
