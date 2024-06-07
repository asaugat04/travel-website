import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Navbar from "./components/common/Navbar";
import path from "./constants/path";
import Footer from "./components/common/Footer";
import DestinationDetails from "./pages/destination/DestinationDetails";
import TourDetails from "./pages/tour/TourDetails";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route
            path={`${path.DESTINATIONDETAILS}:destinationName`}
            element={<DestinationDetails />}
          />
          <Route
            path={`${path.TOURDETAILS}:tourName`}
            element={<TourDetails />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
