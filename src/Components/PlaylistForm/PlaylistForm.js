import { usePlaylist } from "../../Contexts/PlaylistProvider";

export const PlaylistForm = () => {
  const { playlistDispatch, setShowAddPlaylistForm, playlistState } =
    usePlaylist();
  return (
    <div className="overlay">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          playlistDispatch({ type: "CREATE_PLAYLIST" });
          playlistDispatch({ type: "CLEAR_FORM" });
        }}
      >
        <i
          class="fa-solid fa-circle-xmark x-mark"
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
              value={playlistState?.singlePlaylist?.name}
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
              value={playlistState?.singlePlaylist?.description}
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
        <hr />
        {playlistState?.playlists?.map((playlist) => (
          <div
            className="form-playlists"
            style={{
              cursor: playlistState?.videoId ? "pointer" : "not-allowed",
            }}
            onClick={() =>
              playlistState?.videoId &&
              playlistDispatch({
                type: "ADD_VIDEO_TO_PLAYLIST",
                payload: playlist?._id,
              })
            }
          >
            <p>{playlist.name}</p>
            <i
              class="fa-regular fa-circle-xmark"
              onClick={(e) => {
                e.stopPropagation();
                playlistDispatch({
                  type: "DELETE_FROM_PLAYLISTS",
                  payload: playlist?._id,
                });
              }}
            ></i>
          </div>
        ))}
      </form>
    </div>
  );
};
