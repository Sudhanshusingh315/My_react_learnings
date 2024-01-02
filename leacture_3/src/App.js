import { useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./Components/Form/AddVideo";
import VideoList from "./Components/VideoList/VideoList";
function App() {
  const [videos, setVideo] = useState(videoDB);
  function addVideo(video){
    setVideo([...videos,
      {...video, id:video.length+1}
    ]);
    console.log(video)
  }
  return (
    
    <>
      <div className="App">

        <AddVideo addVideo={addVideo}/>
        <VideoList videos={videos}/>
       
      </div>
    </>
  );
}
export default App;
