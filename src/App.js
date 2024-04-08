import "./App.css";
import Home from "./Components/Home";
import PatientEntry from "./Pages/SignInSide";
import Dashboard from "./Pages/dashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry" element={<PatientEntry />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
