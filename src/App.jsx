import "./App.css";
import Login from "./components/login/login.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import ReposicionClase from "./pages/reposicion/reposicion.jsx";
import AboutUs from "./pages/about-us/about-us";

function App() {
  return (
    <div className="App w-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reposicion-clase" element={<ReposicionClase />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
