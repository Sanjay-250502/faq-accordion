
import './App.css'
import FaqAccordion from './FaqAccordion'
import data from './db.json'
function App() {
  

  return (
    <>
    <div className="App">
       <FaqAccordion data={data}/>
    </div>
      
    </>
  )
}

export default App
