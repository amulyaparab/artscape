import { useParams } from "react-router-dom";
import { usePlaylist } from "../Contexts/PlaylistProvider";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { playlistState } = usePlaylist();
  const findPlaylist = playlistState.playlists.find(
    (playlist) => playlist?._id === playlistId
  );
  console.log(findPlaylist);
  return (
    <div className="page">
      <h1 className="heading">SinglePlaylist</h1>
    </div>
  );
};
