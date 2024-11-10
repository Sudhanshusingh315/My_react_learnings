import { useRef, useState } from "react";
import "./notification.css";
const Notificaiton = () => {
    const [notifications, setNotifications] = useState([]);
    const timerRef = useRef({});
    console.log("timerref",timerRef);
    const handleShow = (message, type) => {
        const id = new Date().getTime();
        setNotifications((prev) => [...prev, { id, message, type }]);
        timerRef.current[id] = setTimeout(() => {
            handleHide(id);
        }, 5000);
    };

    const handleHide = (notificaitonId) => {
        clearTimeout(timerRef.current[notificaitonId]);
        delete timerRef.current[notificaitonId];
        setNotifications((prev) => {
            return prev?.filter(({ id }) => {
                return id != notificaitonId;
            });
        });
    };
    console.log(notifications);
    return (
        <>
            <div className="container">
                <div className="toat-container">
                    {notifications?.map(({ id, message, type }) => {
                        return (
                            <div key={id} className={`toast ${type}`}>
                                {message}
                                <p
                                    className="cross-btn"
                                    onClick={(e) => handleHide(id)}
                                >
                                    x
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="btn-container">
                <button onClick={() => handleShow("Success", "success")}>
                    Success
                </button>
                <button onClick={() => handleShow("Info", "info")}>Info</button>
                <button onClick={() => handleShow("Warning", "warning")}>
                    Warning
                </button>
                <button onClick={() => handleShow("Error", "error")}>
                    Error
                </button>
            </div>
        </>
    );
};

export default Notificaiton;
