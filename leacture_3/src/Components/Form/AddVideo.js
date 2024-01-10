import "./AddVideo.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import VideoDispatchContext from "../../context/VideoDispatchContext";
import useVideoDispatch from "../../Hooks/VideoDispatch";

const initialState = {
   
    time: "1 month ago",
    channel: "coder meow",
    verified: true,
    title: "",
    views: "" 
  }
// Making a form in react js
export default function AddVideo({editableVideo,updateVideo}) {
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();
  // this is comming form add button
  function handSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE', payload:video}) 
    }
    else{

      dispatch({type:'ADD',payload:video});
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
