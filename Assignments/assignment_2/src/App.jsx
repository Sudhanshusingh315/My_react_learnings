import './App.css'
import Skills from './components/Skills/Skills'
import Interesting from './components/Interesting/Interesting'
import Experience from './components/Experience/Experience'
function App() {

  return (
    <>
    <div className='container'>

    <h1>Resume Builder</h1>
    <h3>LeaderOfMeow</h3>
    <hr />
    <Interesting />
    <Skills />
    <Experience />
   
    </div>
    </>
  )
}

export default App
