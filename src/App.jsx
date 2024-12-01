import "./css/App.css";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const movieNumber = 1;
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;