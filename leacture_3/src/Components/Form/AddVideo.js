import "./AddVideo.css";
import { useState } from "react";

const initialState = {
   
    time: "1 month ago",
    channel: "coder meow",
    verified: true,
    title: "",
    views: "" 
  }
// Making a form in react js
export default function AddVideo({addVideo}) {
  const [video, setVideo] = useState(initialState);

  // this is comming form add button
  function handSubmit(e) {
    e.preventDefault();
    console.log(video);
    addVideo(video);
    setVideo(initialState);

  }

  // and this is coming from input text
  function handleChange(e) {
    // setVideo(...video,
    //     [e.target.name] = e.target.value)
    setVideo({...video,
        [e.target.name] : e.target.value}) 
    console.log(e.target.name,e.target.value)
  }
  return (
    <>
      <form>
        <input type="text" name="title" onChange={handleChange} placeholder="title" value= {video.title} />
        <input type="text" name="views" onChange={handleChange} placeholder="views" value={video.views}/>
        <button onClick={handSubmit}>Add Me</button>
      </form>
    </>
  );
}
