import videosBD from "../data/Data";
import Video from "./Video/Video";
import "./VideoList.css";
export default function VideoList() {
  return (
    <>
      <div className="VideoList">
        {videosBD.map((video) => (
          <Video key={video.id} {...video}>
            </Video>
        ))}
      </div>
    </>
  );
}
