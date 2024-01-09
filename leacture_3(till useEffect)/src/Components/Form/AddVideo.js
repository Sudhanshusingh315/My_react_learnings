import "./AddVideo.css";
import { useState } from "react";
import { useEffect } from "react";

const initialState = {
   
    time: "1 month ago",
    channel: "coder meow",
    verified: true,
    title: "",
    views: "" 
  }
// Making a form in react js
export default function AddVideo({addVideo,editableVideo,updateVideo}) {
  const [video, setVideo] = useState(initialState);

  // this is comming form add button
  function handSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }
    else{

      addVideo(video);
    }
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

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
  },[editableVideo])
  //  This is called dependency array, also used to specify when this useEffect should run 


  return (
    <>
      <form>
        <input type="text" name="title" onChange={handleChange} placeholder="title" value= {video.title} />
        <input type="text" name="views" onChange={handleChange} placeholder="views" value={video.views}/>
        <button onClick={handSubmit}> {editableVideo ? 'Edit Video': 'Add Video'} </button>
      </form>
    </>
  );
}
