import { useEffect, useRef, useState } from "react";
import "./Otp.css";

const Otp = ({ otpLength = 6 }) => {
  const [array, setArray] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]); 

  useEffect(()=>{
    ref.current[0].focus();
  },[])
  const handleKeyDown = (e,index) =>{
        const copyOtpFields = [...array];
        const key = e.key;

        if(key === "ArrowLeft"){

            if(index > 0) ref.current[index - 1].focus();
            return;
        }
        if(key === "ArrowRight"){

            if(index + 1 < array.length ) {
                    ref.current[index + 1].focus();
            }
            return;
        }
        if(key === "Backspace"){
            copyOtpFields[index] = "";
            setArray(copyOtpFields);
            if(index > 0) ref.current[index - 1].focus();
            return;
        }
        
        if(isNaN(key)){
            return ;
        }
        copyOtpFields[index] = key;
        if(index + 1 < array.length )
        {
                ref.current[index + 1].focus();
        }
        setArray(copyOtpFields);
  }

  return (
    <>
      <div>OTP field</div>
      <div>
        {array.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              value={value}
              className="otp-field"
              onKeyDown={(e)=>handleKeyDown(e,index)}
              ref={(curentInput)=>{ref.current[index] = curentInput}}
            />
          );
        })}
      </div>
    </>
  );
};

export default Otp;
