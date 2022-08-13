import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Discover from "./components/Discover";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="discover" element={<Discover />}/>
          <Route path="search" element={<Search />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
