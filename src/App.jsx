import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
