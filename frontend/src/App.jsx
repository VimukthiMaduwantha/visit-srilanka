import './styles/NavBarview.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBarview from './components/NavBarview'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Places from './pages/Places'
import Feedback from './pages/Feedback'
import Journal from './pages/Journal'
import 'animate.css';
import History from './pages/History'

function App() {

  return (
    <>
      <NavBarview />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutUs' element={<AboutUs />} />
        <Route exact path='/historyAndCulture' element={<History />} />
        <Route exact path='/places' element={<Places />} />
        <Route exact path='/feedback' element={<Feedback />} />
        <Route exact path='/journal' element={<Journal />} />
      </Routes>
      <br />
      <Footer />
    </>
  )
}

export default App
