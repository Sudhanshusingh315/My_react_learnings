// Here i'll keep all the list of videos

import Video from "../Video/Video";
import PlayButton from "../Video/PlayButton";
export default function VideoList({ videos, deleteVideo,editVideo }) {
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
