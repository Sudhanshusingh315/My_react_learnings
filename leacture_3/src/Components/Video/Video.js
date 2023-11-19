import './Video.css' 


export default function Video({title,channel,views,time}){
    const imagePlaceHolder = "https://loremflickr.com/290/190"
    return(
        <>
        <div className='container'>

        <img 
            src= {imagePlaceHolder} 
            alt = "Youtube Thumbnail " 
        />
        <div className='title'>{title}</div>
        <div className='channel'>{channel}</div>
        <div className='views'>{views} views <span>.</span>{time}</div>
       </div> 
        </>
    )
}