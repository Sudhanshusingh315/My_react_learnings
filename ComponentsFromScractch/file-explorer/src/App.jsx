import { useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import data from './data.json'
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="App">
                <FileExplorer folderData={data}/>
            </div>
        </>
    );
}

export default App;
