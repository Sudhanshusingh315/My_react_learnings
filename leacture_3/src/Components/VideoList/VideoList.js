// Here i'll keep all the list of videos

import Video from "../Video/Video";
import PlayButton from "../Video/PlayButton";
import { useContext } from "react";
import VideoContext from "../../context/VideoContext";
export default function VideoList({deleteVideo,editVideo }) {
  const videos = useContext(VideoContext)
  return (
    <> 
    {
        videos.map((video) => (
        <Video let key={video.id} {...video} deleteVideo={deleteVideo} editVideo={editVideo}>
          <PlayButton
            onPlay={() => console.log("Playing ", video.title)}
            onPause={() => {
              console.log("Pause", video.title);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
        ))

    }
   </> 
  );
}
