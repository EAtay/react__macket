import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Service from "./pages/Service/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/catalog" element={<Catalog />} />{" "}
          <Route path="/service" element={<Service />} />{" "}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
