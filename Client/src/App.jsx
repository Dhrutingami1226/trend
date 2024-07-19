import '../input.css'
import Footer from './Components/Footer'
import Topbar from './Components/Topbar'
import Home from './Home'
import { useState } from 'react'

function App() {
  const [page, setpage] = useState(<Home/>)


  return (
    <>
      <div className="absolute">
        <Topbar />
      </div>
      {page}
      <Footer/>
    </>
  )
}

export default App
