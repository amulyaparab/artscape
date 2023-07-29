import { useParams } from "react-router-dom";
import { usePlaylist } from "../../Contexts/PlaylistProvider";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { playlistState } = usePlaylist();
  const findPlaylist = playlistState?.playlists?.find(
    (playlist) => playlist?._id === playlistId
  );

  return (
    <div className="page">
      <h1>{findPlaylist?.name}</h1>
      <p>{findPlaylist?.description}</p>
      <div>
        {findPlaylist?.videos?.length ? (
          findPlaylist?.videos?.map((video) => <VideoCard {...video} />)
        ) : (
          <h2>No videos here.</h2>
        )}
      </div>
    </div>
  );
};
