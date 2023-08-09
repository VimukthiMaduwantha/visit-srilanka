import './styles/NavBarview.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBarview from './components/NavBarview'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <NavBarview />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
