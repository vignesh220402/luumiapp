import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import User from "./pages/User"
import About from "./pages/About"
import Contact from "./pages/Contact"
import BlogSection from "./pages/BlogSection"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogsection" element={<BlogSection />} />
      </Routes>
    </Router>

  )
}

export default App
