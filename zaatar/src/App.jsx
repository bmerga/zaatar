// import React from 'react'
import Navbar from './Components/NAvbar/Navbar'
import SandalCollection from './Pages/Zaatar/Hero/SandalCollection/SandalCollection'
import Zaatar from './Pages/Zaatar/Hero/Zaatar'
import NewIn from './Pages/Zaatar/Newin/NewIn'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Zaatar />
      <NewIn />
      <SandalCollection />
    </div>
  )
}

export default App


