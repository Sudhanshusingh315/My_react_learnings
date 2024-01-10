import { useState } from "react";
import "./AddVideo.css";
function AddVideo({addVideos}) {

  const initialState = {
    name:"",
    place:"",
    age: 24,
    husband: "leaderofmeow",
    married: true,
  };

  const [videos, setVideos] = useState(initialState);

// using this to add video 
    function handleInput(e){
      e.preventDefault();
      e.stopPropagation();
    addVideos(videos);
    setVideos(initialState);

  };

// this is handling the change in the function   
  function handlechange(e) {
    e.stopPropagation();
    setVideos({ ...videos,
        [e.target.name]:e.target.value
    });
    console.log(e.target.name, e.target.value);

    
  }
  return (
    <>
      <form>
        <input
          onChange={handlechange}
          type="text"
          placeholder="Name"
          name="name"
          value={videos.name}
        />
        <input
          onChange={handlechange}
          type="text"
          placeholder="Place"
          name="place"
          value={videos.place}
        />
        <button onClick={handleInput} className="addbutton">
          Add Me
        </button>
      </form>
    </>
  );
}

export default AddVideo;
