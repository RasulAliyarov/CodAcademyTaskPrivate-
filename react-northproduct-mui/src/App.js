import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import { useState } from "react"

function App() {

  let [card, setCards] = useState([])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
