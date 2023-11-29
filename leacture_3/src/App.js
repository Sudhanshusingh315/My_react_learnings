import './App.css'
import Video from './Components/Video/Video';
import videos from './data/data';
function App() {
 
  return(
    <>

    <div className='App'>
    {

      videos.map(video => <Video let key={video.id} {...video} />)

    }

    {/* This is how i used to pass and make components */}
    {/* <Video {...obj}/> */}
    {/* <Video {...obj_1}/> */}
    {/* <Video {...obj_1}/> */}
    
    </div>
    </>

  )
}

export default App;
