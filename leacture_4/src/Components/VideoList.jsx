import Video from "./Video/Video";
import "./VideoList.css";
export default function VideoList({videos}) {
  return (
    <>
      <div className="VideoList">
        {videos.map((video) => (
          <Video key={video.id} {...video}>
            </Video>
        ))}
      </div>
    </>
  );
}
