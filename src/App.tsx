import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route index path="login" element={<Login />} />
        <Route path="dashboard/*" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
