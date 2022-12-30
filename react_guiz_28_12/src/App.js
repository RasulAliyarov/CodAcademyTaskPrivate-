import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Add from "./pages/Add/Add"
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
