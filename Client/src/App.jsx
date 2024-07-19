import '../input.css'
import Footer from './Components/Footer'
import Topbar from './Components/Topbar'
import Home from './Home'

function App() {

  return (
    <>
      <div className="absolute">
        <Topbar />
      </div>
      <Home />
      <Footer/>
    </>
  )
}

export default App
