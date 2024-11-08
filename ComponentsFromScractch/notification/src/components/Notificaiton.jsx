import { useState } from "react";
import "./notification.css";
const Notificaiton = () => {
    let timerId;
    const [show, setShow] = useState(false);
    const [toasts, setToasts] = useState([]);

    const handleClose = () => {
        setShow(false);
    };

    const handlShow = (e, typeOfToast) => {
        setShow(true);
        setToasts((prev) => [...prev, typeOfToast]);
    };
    console.log("Type of toast", toasts);
    return (
        <>
            {show && (
                <div className="toast-container">
                    {toasts?.map((element, index) => {
                        return (
                            <>
                                <div className="toast">
                                    {element.type}
                                    <span onClick={() => setShow(false)}>
                                        x
                                    </span>
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
            <div className="btn-container">
                <button
                    onClick={(e) => {
                        handlShow(e, { type: "Success" });
                    }}
                >
                    Success Toast
                </button>
                <button
                    onClick={(e) => {
                        handlShow(e, { type: "Info" });
                    }}
                >
                    Info Toast
                </button>
                <button
                    onClick={(e) => {
                        handlShow(e, { type: "Warning" });
                    }}
                >
                    Warning Toast
                </button>
                <button
                    onClick={(e) => {
                        handlShow(e, { type: "Error" });
                    }}
                >
                    Error Toast
                </button>
            </div>
        </>
    );
};

export default Notificaiton;
