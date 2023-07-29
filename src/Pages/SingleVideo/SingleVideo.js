import { useParams } from "react-router-dom";
import { useVideos } from "../../Contexts/VideoProvider";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./singleVideo.css";
export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoState, isVideoInWatchLater, videoDispatch } = useVideos();
  const findVideo = videoState.allVideos.find(
    (video) => video._id === Number(videoId)
  );
  return (
    <div className="page">
      <div className="single-video-page">
        <div className="single-video">
          <h1 className="heading">SingleVideo</h1>
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
              <i class="fa-solid fa-clipboard-list"></i>
              <i class="fa-solid fa-file-pen"></i>
            </div>
          </div>
          <hr />
          <h1>My Notes</h1>
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
// {
//   _id: 34,
//   title: "Stop Motion Animation Tips and Tricks",
//   views: 3172,
//   chips: ["stop motion", "animation", "tips", "tricks"],
//   thumbnail: "https://picsum.photos/310/174",
//   src: "https://www.youtube.com/embed/GBIIQ0kP15E",
//   category: "Stop Motion",
//   creator: "AnimateMagic",
// },
