import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          BoolFlix2
        </Link>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
