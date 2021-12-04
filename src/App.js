import "./App.css";
import Home from "./pages/Home";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
