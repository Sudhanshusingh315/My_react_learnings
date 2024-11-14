import { useEffect,useRef, useState } from "react";
import images from "../data.js";
import './carousel.css'
const DATA_LENGTH = images?.length;
const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const timerRef = useRef(null);
    const rightClickButton = () =>{
        setCurrentImage((prev)=>{
            if(currentImage === DATA_LENGTH - 1){
                return 0;
            }
            return prev + 1;
        })
    }
    console.log(currentImage);
    const leftClickButton = () =>{
        setCurrentImage((prev)=>{
            if(currentImage === 0){
                return DATA_LENGTH - 1;
            }
            return prev - 1;
        })
    }

    useEffect(()=>{
        timerRef.current = setInterval(() => {
            rightClickButton()
        }, (1000));

        return ()=>{
            clearInterval(timerRef.current);
        }
    },[])


    return <div className="container">
        <div  onClick={()=>{leftClickButton()}} className="left-btn">{"<"}</div>
        <div onMouseEnter={()=>{clearInterval(timerRef.current)}} className="img-container">
            <img src={images[currentImage].download_url} alt="" />
        </div>
        <div onClick={()=>{rightClickButton()}} className="right-btn">{">"}</div>
    </div>;
};

export default Carousel;
