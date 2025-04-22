import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Elenco Film</h1>
      <ul className="list-group">
        {movies.map((f) => (
          <li key={f.id} className="list-group-item">
            <Link to={`/movies/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
