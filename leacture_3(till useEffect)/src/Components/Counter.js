import { useState } from "react";
function Counter(){
    // number : is the state, setNumber is setter 
    // you don't directly update the sate, you only update the setter 
    const [number, setNumber] =  useState(0); 
    function handlerClick(e){
        e.stopPropagation(); 
        setNumber(number+1);
        console.log("number",number);
    }
    return(
        <>
            <h1>{number}</h1>    
            <button onClick={handlerClick}>Click me pretty please</button>
        </>
    )
}

export default Counter;