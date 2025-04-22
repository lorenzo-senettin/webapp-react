import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          BoolFlix2
        </Link>
      </nav>
    </>
  );
}

export default App;
