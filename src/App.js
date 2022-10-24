import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
