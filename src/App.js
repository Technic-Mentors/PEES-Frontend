import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About'
import Industrialsolar from './Components/Industrialsolar'
import Commercialsolar from './Components/Commercialsolar'
import Residentialsolar from './Components/Residentialsolar'
import Agriculturalsolar from './Components/Agriculturalsolar'
import Contact from './Components/Contact'
import Getquote from './Components/Getquote'
import Footer from './Components/Footer';
import Scrolltop from './Components/ScrollTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Scrolltop />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/our-company" element={<About />} />
          <Route path="/industrial-solar" element={<Industrialsolar/>}/>
          <Route path="/commercial-solar" element={<Commercialsolar/>}/>
          <Route path="/residential-solar" element={<Residentialsolar/>}/>
          <Route path="/agricultural-solar" element={<Agriculturalsolar/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/get-a-quote" element={<Getquote/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
