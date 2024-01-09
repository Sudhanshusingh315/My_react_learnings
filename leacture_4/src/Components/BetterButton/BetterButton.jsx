import { useState } from "react";
export default function BetterButton({children}){    

    const [play,setPlay] = useState(true);

    function handleClick(e){
        e.stopPropagation();
        if(play){
            
        }else{

        }
        setPlay((play)=>!play)
        console.log({children});
    }
    return(
        <>
            <button onClick={handleClick}>{children} {play ? "▶️": "⏸"}</button>    
        </>
    );
}