import "./playlists.css";
import { usePlaylist } from "../../Contexts/PlaylistProvider";
import { useNavigate } from "react-router-dom";

export const Playlists = () => {
  const { playlistDispatch, playlistState, setShowAddPlaylistForm } =
    usePlaylist();
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Playlists</h1>

      <div className="playlists">
        {playlistState?.playlists?.map((playlist) => (
          <div
            className="playlist"
            onClick={() => navigate(`/playlists/${playlist._id}`)}
          >
            <i
              class="fa-solid fa-trash cross"
              onClick={(event) => {
                event.stopPropagation();
                playlistDispatch({
                  type: "DELETE_FROM_PLAYLISTS",
                  payload: playlist?._id,
                });
              }}
            ></i>
            <img src={playlist?.playlistThumbnail} alt={playlist?.name} />
            <h3>{playlist?.name}</h3>
            <p>{playlist?.description}</p>
          </div>
        ))}

        <i
          class="fa-solid fa-circle-plus plus-btn"
          onClick={() => setShowAddPlaylistForm(true)}
        ></i>
      </div>
    </div>
  );
};
