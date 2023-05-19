// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contactform";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/Contactform.css";
import "./styles/mediaquery.scss";

function App() {
  return (
    // <home/>
 <Router>
   <Header />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
   </Routes>
   <Footer/>
 </Router>
  );
}

export default App;
