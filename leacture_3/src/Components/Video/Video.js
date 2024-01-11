import { createContext, useContext, useEffect } from "react";
import "./Video.css";
import ThemeContext from "../../context/ThemeContext";

export default function Video({
  title,
  id,
  channel,
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo
}) {
  const theme = useContext(ThemeContext);
  const imagePlaceHolder = "https://loremflickr.com/290/190";

  useEffect(()=>{
    console.log("video playing", id);
  });



  return (
    <>
      <div className= {`container ${theme}`}>
        <button className="close" onClick={() => deleteVideo(id)}>
          x
        </button>
        <button className="edit" onClick={()=> editVideo(id)}>
            ✏️ 
        </button>
        <img src={imagePlaceHolder} alt="Youtube Thumbnail " />
        <div className="title">{title}</div>
        {/* conditional rendering */}
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
