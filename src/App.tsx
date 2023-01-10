import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

function App() {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Navigate to={'login'} />} />
        <Route index path="login" element={<Login />} />
        <Route path="dashboard/*" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
