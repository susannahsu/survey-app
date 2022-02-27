import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Survey from "./pages/survey";
function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Survey />} />
      </Routes>
    </>
  );
}

export default App;
