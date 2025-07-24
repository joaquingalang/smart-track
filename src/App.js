import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
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
