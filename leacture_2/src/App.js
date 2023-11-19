// this is also a component

import './App.css'
import Video from './components/Video/Video';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Profiles/profile'
import Curly from './components/Curlybraces/Curly';
import Props from './components/props/Props';

function App(){
    return (
        <div>
            <div>hello</div>
            {/* 1st revise this */}
            <Video></Video>
            {/* Second part of the video starts at 43:05  */}
            <Navbar></Navbar>
            <Gallery></Gallery>
            <Curly></Curly>
            <Props title="animated1"></Props> 
            <Props title="animated2"></Props>

        </div>

    )
};
export default App;
