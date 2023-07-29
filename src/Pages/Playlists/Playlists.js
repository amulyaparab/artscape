import "./playlists.css";
import { usePlaylist } from "../../Contexts/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import { PlaylistForm } from "../../Components/PlaylistForm/PlaylistForm";
export const Playlists = () => {
  const {
    playlistDispatch,
    playlistState,
    showAddPlaylistForm,
    setShowAddPlaylistForm,
  } = usePlaylist();
  const navigate = useNavigate();
  console.log({ asdasdas: playlistState?.playlists });

  return (
    <div className="page">
      <h1 className="heading">Playlists</h1>

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
      {/* {showAddPlaylistForm && <PlaylistForm />} */}
      {/* <div className="overlay">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
              playlistDispatch({ type: "CREATE_PLAYLIST" });
              setShowAddPlaylistForm(false);
            }}
          >
            <i
              class="fa-solid fa-circle-xmark"
              onClick={() => {
                setShowAddPlaylistForm(false);
                playlistDispatch({ type: "CLEAR_FORM" });
              }}
            ></i>
            <h2>Add New Playlist</h2>
            <div className="form-details">
              <label>
                Name of Playlist:
                <input
                  required
                  onChange={(event) =>
                    playlistDispatch({
                      type: "PLAYLIST_NAME",
                      payload: event.target.value,
                    })
                  }
                />
              </label>
              <label>
                Description:
                <input
                  required
                  onChange={(event) =>
                    playlistDispatch({
                      type: "PLAYLIST_DESCRIPTION",
                      payload: event.target.value,
                    })
                  }
                />
              </label>
              <button type="submit">Create New Playlist</button>
            </div>
          </form>
        </div> */}
    </div>
  );
};
