import { useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./Components/Form/AddVideo";
import VideoList from "./Components/VideoList/VideoList";
function App() {
  const [videos, setVideo] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);
  function addVideo(video){
    setVideo([...videos,
      {...video, id:video.length+1}
    ]);
    console.log(video)
  }
  
  function deleteVideo(id){
    setVideo(videos.filter(video => video.id !== id))
    console.log(id);
  }

  function editVideo(id){

    // this only changes the value inside the intial value, this does not need to be passed
    setEditableVideo(videos.find(video => video.id===id))

  }

  function updateVideo(video){
    console.log(video);
    const index = videos.findIndex(v => v.id===video.id)
    const newVideo=[...videos]
    newVideo.splice(index,1,video)
    setVideo(newVideo);
  }


  return (
    
    <>
      <div className="App">
        {console.log("app")}

        <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}/>
        <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}/>
       
      </div>
    </>
  );
}
export default App;
