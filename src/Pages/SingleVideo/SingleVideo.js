import { useParams } from "react-router-dom";
import { useVideos } from "../../Contexts/VideoProvider";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./singleVideo.css";
import { useState } from "react";
import { usePlaylist } from "../../Contexts/PlaylistProvider";
export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoState, isVideoInWatchLater, videoDispatch } = useVideos();
  const findVideo = videoState.allVideos.find(
    (video) => video._id === Number(videoId)
  );
  const [showNotesForm, setShowNotesForm] = useState(false);
  const { setShowAddPlaylistForm, playlistDispatch, playlistState } =
    usePlaylist();
  const playlistHandler = () => {
    playlistDispatch({ type: "STORE_ID", payload: videoId });
    setShowAddPlaylistForm(true);
  };

  return (
    <div className="page">
      <div className="single-video-page">
        <div className="single-video">
          <h1>SingleVideo</h1>
          <iframe
            width="800"
            height="500"
            src={findVideo?.src}
            frameborder="0"
            allowfullscreen
            title={findVideo?.title}
          ></iframe>
          <div className="single-video-details ">
            <h4>{findVideo?.title}</h4>
            <div>
              {isVideoInWatchLater(findVideo?._id) ? (
                <i
                  class="fa-solid fa-clock"
                  onClick={() =>
                    videoDispatch({
                      type: "REMOVE_FROM_WATCH_LATER",
                      payload: findVideo?._id,
                    })
                  }
                ></i>
              ) : (
                <i
                  class="fa-regular fa-clock"
                  onClick={() =>
                    videoDispatch({
                      type: "ADD_TO_WATCH_LATER",
                      payload: findVideo?._id,
                    })
                  }
                ></i>
              )}
              <i
                class="fa-solid fa-clipboard-list"
                onClick={() => playlistHandler()}
              ></i>
              <i
                class="fa-solid fa-note-sticky"
                onClick={() => setShowNotesForm(!showNotesForm)}
              ></i>
            </div>
          </div>
          <hr />
          <h1>My Notes</h1>
          {showNotesForm && (
            <form
              className="note-form"
              onSubmit={(event) => {
                event.preventDefault();
                videoDispatch({ type: "ADD_NOTES", idPayload: videoId });
                setShowNotesForm(false);
              }}
            >
              <input
                // required
                value={videoState?.note}
                onChange={(event) =>
                  videoDispatch({
                    type: "STORE_NOTE",
                    payload: event.target.value,
                  })
                }
              />
              {videoState?.noteId?.length ? (
                <button
                  className="note-btn"
                  onClick={() =>
                    videoDispatch({ type: "EDIT_NOTE", idPayload: videoId })
                  }
                >
                  Edit
                </button>
              ) : (
                <button
                  className="note-btn"
                  disabled={!videoState?.note?.length}
                >
                  Add new note
                </button>
              )}
            </form>
          )}

          {findVideo?.notes?.map((note) => (
            <div className="note">
              <span>{note.content}</span>
              <span>
                <i
                  class="fa-regular fa-pen-to-square"
                  onClick={() => {
                    videoDispatch({
                      type: "GIVE_EDIT_VALUE",
                      payload: note?._id,
                      idPayload: videoId,
                    });
                    setShowNotesForm(true);
                  }}
                ></i>
                <i
                  class="fa-regular fa-circle-xmark"
                  onClick={() =>
                    videoDispatch({
                      type: "DELETE_NOTE",
                      payload: note?._id,
                      idPayload: videoId,
                    })
                  }
                ></i>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>More Videos:</h3>
          <div className="more-videos">
            <div>
              {videoState?.allVideos?.map((video) => (
                <VideoCard {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
