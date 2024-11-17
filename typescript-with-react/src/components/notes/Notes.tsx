import "./notes.css";
import { Notesprops } from "./notes.types";
export default function Notes(props: Notesprops) {
    const { priority, text } = props;
    return (
        <>
    <div className={`notes ${priority}`}>
            {text}
        </div>
        </>
    );
}
