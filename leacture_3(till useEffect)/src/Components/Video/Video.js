import "./Video.css";

export default function Video({
  title,
  id,
  channel,
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo,
}) {
  const imagePlaceHolder = "https://loremflickr.com/290/190";

  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          x
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
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
