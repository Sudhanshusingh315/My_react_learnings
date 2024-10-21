import './notification.css'
const Notificaiton = () =>{
    return (
        <div className="container">
            <div className="toast-container">
            <div className="toast">
                    Success Toast <span>x</span>
                </div>
            </div>
            <div className="btn-container">
                <button>Success Toast</button>
                <button>Info Toast</button>
                <button>Warning Toast</button>
                <button>Error Toast</button>

            </div>
        </div>
    )

}

export default Notificaiton;