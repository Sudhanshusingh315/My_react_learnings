import { useState } from "react";
import "./App.css";
import AddVideo from "./Components/AddVideo/AddVideo";
import VideoList from "./Components/VideoList";
import videosDB from "./data/Data"; 
function App() {
  const [video,setVideo] = useState(videosDB);
  function addVideos(videos){
    setVideo([...video,{ ...videos, id:video.length+1 }]);
    console.log(video);
  }
  return (
    <>
     {console.log("app")}
      <AddVideo addVideos={addVideos} />
      <VideoList videos={video} />
    </>
  );
}

export default App;
