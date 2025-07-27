import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
    <div className="app-border">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
