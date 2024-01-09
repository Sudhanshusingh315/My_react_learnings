import { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./Components/Form/AddVideo";
import VideoList from "./Components/VideoList/VideoList";
import ThemeContext from "./context/ThemeContext";
function App() {
  
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos,dispatch] = useReducer(videoReducer,videoDB);
  const [mode, setMode] = useState('darkMode') 
  function videoReducer(videos,action){
    
    switch(action.type){
      case'ADD':
        return [...videos,
      {...action.payload, id:videos.length+1}
      ];

      case 'DELETE':
      return videos.filter(video => video.id !== action.payload);

      case 'UPDATE':
        const index = videos.findIndex(v => v.id===action.payload.id)
        const newVideo=[...videos]
        newVideo.splice(index,1,action.payload)
        setEditableVideo(null);
        return newVideo
      default:
        return videos;
    } 
  }
  
 
  // const [videos, setVideo] = useState(videoDB);
  
  // using context here 

  function deleteVideo(id){
    dispatch({type:'DELETE',payload:id})
    // setVideo(videos.filter(video => video.id !== id))
    console.log(id);
  }

  function editVideo(id){

    // this only changes the value inside the intial value, this does not need to be passed
    setEditableVideo(videos.find(video => video.id===id))

  }

  


  return (
      <ThemeContext.Provider value={mode}>

      <div className={`App ${mode}`}>
        <button onClick={()=> setMode(mode==='darkMode'? 'lightMode':'darkMode')}>mode</button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}/>
       
      </div>
      </ThemeContext.Provider> 
  );
}
export default App;
