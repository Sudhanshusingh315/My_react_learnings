import { useState } from 'react';
import './star.css';
export default function Star({ratingNo=6}){
    const ratingLength = new Array(ratingNo).fill("");
    const [selectedStar, setSelectedStar] = useState(0);
    const [hoverStar, setHoverStar] = useState(0);
    return (
        <div className='container'>
            {
                ratingLength?.map((element,index)=>{
                    return <p 
                        key={index}
                        className={(hoverStar === 0 && index < selectedStar) || hoverStar > index ? "star gold" : "star"}
                        onClick={()=>{setSelectedStar(index+1)}}
                        onMouseEnter={()=>setHoverStar(index+1)}
                        onMouseLeave={()=>setHoverStar(0)}
                        >
                            &#x2605;
                        </p>
                })
            }
        </div>
    )
}