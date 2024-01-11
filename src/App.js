import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { default as Home } from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </Router>
    </>
  );
}

const MainContent = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const pathname = location.pathname;

    switch (true) {
      case pathname === "/":
        return "Home";
        case pathname === "/contact":
          return "Contact";
      default:
        return "Error 404";
    }
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <title>Detailing Company | {getPageTitle()}</title>
    </>
  );
};

export default App;
