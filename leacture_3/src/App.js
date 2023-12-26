import "./App.css";
import Counter from "./Components/Counter";
import PlayButton from "./Components/Video/PlayButton";
import Video from "./Components/Video/Video";
import videos from "./data/data";
function App() {
  return (
    <>
      <div className="App">
        {videos.map((video) => (
          <Video let key={video.id} {...video}>
            <PlayButton
              onPlay={() => console.log("Playing ",video.title)}
              onPause={() => {
                console.log("Pause",video.title);
              }}
            >
             {video.title} 
            </PlayButton>
          </Video>
        ))}

        {/* This is how i used to pass and make components */}
        {/* <Video {...obj}/> */}
        {/* <Video {...obj_1}/> */}
        {/* <Video {...obj_1}/> */}

        {/* ADDING THIS BUTTON IN VIDEO component */}
        {/* <PlayButton message='now playing' onPlay={()=>console.log('Playing')} onPause={()=>console.log('Paused')}>Play</PlayButton> */}

        {/* <PlayButton message='now pause2'onSmash={()=>alert('HELLO')}>Pause</PlayButton> */}
              <Counter></Counter>
      </div>
    </>
  );
}
export default App;
