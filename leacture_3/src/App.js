import './App.css'
import Video from './Components/Video/Video';
function App() {
  let obj = {
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Coder Dost',
  };
  return(
    <>

    <div className='App'>

    <Video {...obj}/>
    <Video {...obj}/>
    <Video {...obj}/>
    <Video {...obj}/>
    <Video {...obj}/>
    
    </div>
    </>

  )
}

export default App;
