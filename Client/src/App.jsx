import '../input.css'
import Topbar from './Components/Topbar'
import Home from './Home'

function App() {

  return (
    <>
      <div className="absolute">
        <Topbar />
      </div>
      <Home />
    </>
  )
}

export default App
