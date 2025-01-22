import './App.css'
import Home from './componets/Home'
import Header from './componets/Header'
import About from './componets/About'
import Footer from './componets/Footer'
import Contact from './componets/Contact'
import Projects from './componets/Projects'
import Project1 from './componets/Project1'
import Project2 from './componets/Project2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
