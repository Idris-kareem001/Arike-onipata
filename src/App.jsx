import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Arikeonipata from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./About";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Arikeonipata />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
