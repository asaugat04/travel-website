import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Navbar from "./components/common/Navbar";
import path from "./constants/path";
import Footer from "./components/common/Footer";
import CountryDetails from "./pages/countries/CountryDetails";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.COUNTRYDETAILS} element={<CountryDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
