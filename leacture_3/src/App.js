import './App.css'
import Video from './Components/Video/Video';
function App() {
  let obj = {
    title: 'react js tutorial',
    views: '999k',
    time: '1 year ago',
    channel: 'coder dost',
    verified: true,
  };
  let obj_1 = {
    title: 'Node Js tutorial',
    views:'10k',
    time:'12 seconds ago',
    channel: 'coder meow',
    verified:false,
  } 
  return(
    <>

    <div className='App'>

    <Video {...obj}/>
    <Video {...obj_1}/>
    <Video {...obj_1}/>
    <Video {...obj}/>
    <Video {...obj_1}/>
    
    </div>
    </>

  )
}

export default App;
