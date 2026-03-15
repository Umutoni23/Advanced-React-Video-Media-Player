import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          width="100%"
        />
      </Link>

      <h4>{video.snippet.title}</h4>

      <Link to={`/channel/${video.snippet.channelId}`}>
        <p>{video.snippet.channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;