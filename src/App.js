import "./App.css";
import Home from "./pages/Home";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Map from "./components/Map";
import Profile from "./pages/Profile";
import SiteWelcome from "./pages/SiteWelcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="dashboard-container col-8">
              <div className="header"></div>
              <div className="body">
                <Routes>
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/map" element={<Map />} />
                  <Route exact path="/signIn" element={<SignIn />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/" element={<SiteWelcome />} />
                </Routes>
              </div>
              <div className="footer"></div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
