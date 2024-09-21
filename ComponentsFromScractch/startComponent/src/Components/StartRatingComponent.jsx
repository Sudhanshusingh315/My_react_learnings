import { useState } from "react"

export default function StartRating ({startCount=5}){
    const [startValue,setStarValue] = useState();
    const [hoverIndex,setHoverIndex] = useState();
    console.log("star value is ",startValue);
    return <>
    <div className="container">
        {new Array(startCount).fill(0).map((value,index)=> {
           return  <span key={index} className={hoverIndex ===0 && index < startValue || index <  hoverIndex ? "gold":"star"} onClick={()=>{setStarValue(index+1)}} onMouseEnter={()=>{setHoverIndex(index+1)}} onMouseLeave={()=>setHoverIndex(0)} >&#9733;</span>
        })}
    </div>
    </>
}