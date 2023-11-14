// this is also a component

import './App.css'
import Video from './components/Video/Video';
import Navbar from './components/Navbar';
import Gallery from './components/profiles/profile'



function App(){
    return (
        <div>
            <div>hello</div>
            <Video></Video>
            <Navbar></Navbar>
            <Gallery></Gallery>
        </div>

    )
};
export default App;
