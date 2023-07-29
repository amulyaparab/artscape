import { useParams } from "react-router-dom";
import { usePlaylist } from "../Contexts/PlaylistProvider";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { playlistState } = usePlaylist();
  const findPlaylist = playlistState.playlists.find(
    (playlist) => playlist?._id === playlistId
  );
  // singlePlaylist: {
  //   _id: "",
  //   playlistThumbnail: "https://picsum.photos/300/200",
  //   name: "",
  //   description: "",
  // },
  return (
    <div className="page">
      <h1 className="heading">{findPlaylist?.name}</h1>
      <p>{findPlaylist?.description}</p>
    </div>
  );
};
