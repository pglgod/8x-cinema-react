import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Alert from "./Components/Alert";
import Bollywood from "./Components/Bollywood";
import Hollywood from "./Components/Hollywood";
import Bramhastra from './Components/Bollywood/Bramhastra';
import IamGroot from "./Components/Hollywood/IamGroot";
function App() {
  return (
    <Router>
      <Navbar />
      <Alert />
      <div className="container py-2">
        <Routes> {/* using Routes instead of switch */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/bollywood" element={<Bollywood/>} />
          <Route exact path="/hollywood" element={<Hollywood/>}/>
          <Route exact path="/bollywood/bramhastra" element={<Bramhastra/>} />
          <Route exact path="/hollywood/i_am_groot" element={<IamGroot/>}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
