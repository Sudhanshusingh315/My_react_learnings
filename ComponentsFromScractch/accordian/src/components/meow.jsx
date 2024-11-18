import { useState } from "react";
import meowStyles from './meox.module.css';
export default function Meow({ques}) {
    const [show,setShow] = useState(false);
    return (
        <div  className={meowStyles.accordianContainer}>
            <div className={meowStyles.questionBlock}>
                <h1>{ques.question}</h1>
                <span
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    {"x"}
                </span>
            </div>
            {show && <p>{ques.answer}</p>}
        </div>
    );
}
