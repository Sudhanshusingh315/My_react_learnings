import { useState } from "react";
import "./App.css";
import Notes from "./components/notes/Notes";
import { data } from "./data";
import { Notesprops, Priority } from "./components/notes/notes.types";
function App() {
    const [notesData, setNotesData] = useState<Notesprops[]>(data);
    const [selectPriority, setSelectPriority] = useState<Priority>(
        Priority.Low
    );
    const [noteText, setNoteText] = useState<string>("");

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectPriority(e.target.value as Priority);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoteText(e.target.value);
    };

    const handleAddNote = () => {
        setNotesData((prev) => [
            ...prev,
            {
                id: prev?.length + 1,
                text: noteText,
                priority: selectPriority,
            },
        ]);
        setSelectPriority(Priority.Low);
        setNoteText("");
    };

    return (
        <div className="App">
            <div className="container">
                <div className="input-notes">
                    <input
                        value={noteText}
                        className="text-input"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />
                    <select
                        value={selectPriority}
                        name="priority"
                        id="pet-select"
                        onChange={(e) => {
                            handleSelect(e);
                        }}
                    >
                        <option value={Priority.High}>High</option>
                        <option value={Priority.Medium}>Medium</option>
                        <option value={Priority.Low}>Low</option>
                    </select>
                    <button
                        onClick={() => {
                            handleAddNote();
                        }}
                    >
                        Add Note
                    </button>
                </div>
            </div>

            <div>
                {notesData?.map((element, index) => {
                    return (
                        <Notes
                            key={index}
                            priority={element?.priority}
                            text={element.text}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
