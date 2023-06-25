// IMPORT PACKAGES
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

// IMPORT LAYOUTS
import LayoutFrontend from "./layouts/FrontEnd/LayoutFrontend";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/Contact/ContactUs";
import Infrastructure from "./pages/Services/Infrastructure";
import WebDD from "./pages/Services/WebDD";
import SecuritySystem from "./pages/Services/SecuritySystem";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import Amc from "./pages/Services/Amc";
import Login from "./pages/auth/Login";

// IMPORT SCSS
import "./App.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
      <ScrollToTop smooth color="#ff0000" />
      <Routes>
        <Route path="/" element={<LayoutFrontend />}>
          <Route index path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service/infrastructure" element={<Infrastructure />} />
          <Route path="/service/development" element={<WebDD />} />
          <Route path="/service/security" element={<SecuritySystem />} />
          <Route path="/service/marketing" element={<DigitalMarketing />} />
          <Route path="/service/amc" element={<Amc />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
