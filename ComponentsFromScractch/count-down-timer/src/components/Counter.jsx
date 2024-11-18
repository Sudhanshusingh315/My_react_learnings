import { useState } from "react";
import "./couter.css";
export default function Counter() {
    const [timer, setTimer] = useState({
        hour: "",
        minute: "",
        second: "",
    });
    const handleTimer = (e,field) =>{
        const value = parseInt(e.target.value) || 0;
        console.log(`${value} ${field}`)
        const copyTime = {...timer};
        copyTime[field] = value;
        copyTime.minute += Math.floor(copyTime.second / 60);
        copyTime.second = copyTime.second % 60;
        copyTime.hour +=Math.floor(copyTime.minute / 60);
        copyTime.minute = copyTime.minute % 60;
        setTimer(copyTime);
    }
    console.log(timer);
    return (
        <div>
            <input value={timer.hour} onChange={(e)=>{handleTimer(e,'hour')}} type="text" placeholder="HH" />
            :
            <input value={timer.minute} onChange={(e)=>{handleTimer(e,'minute')}} type="text" placeholder="MM" />
            :
            <input value={timer.second} onChange={(e)=>{handleTimer(e,'second')}} type="text" placeholder="SS" />
        </div>
    );
}
