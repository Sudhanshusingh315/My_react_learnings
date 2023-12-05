import './Video.css' 

export default function Video({title,channel,views,time,verified,children}){
    const imagePlaceHolder = "https://loremflickr.com/290/190"
    
    return(
        <>
        <div className='container'>

        <img 
            src= {imagePlaceHolder} 
            alt = "Youtube Thumbnail " 
        />
        <div className='title'>{title}</div>
        {/* conditional rendering */}
        <div className='channel'>{channel} {verified && '✅'}</div>        
        <div className='views'>{views} views <span>.</span>{time}</div>
        <div>
            {children}
        </div>
       </div> 
        </>
    )
}