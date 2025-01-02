import { BrowserRouter as Router, Routes, Route } from 'react-router'

import About from './pages/about'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Langues from './pages/Langues'
import Skills from './pages/Skills'
import Error from './pages/Error'

import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Router>
        <div className='page'>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/langues" element={<Langues />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
