import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import CreatePoem from "./pages/CreatePoem";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/create-poem" element={<CreatePoem />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </Router>
  );
}

export default App;
