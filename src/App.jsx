import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./Component/Navbar/Navbar";
import MainPage from "./Component/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
