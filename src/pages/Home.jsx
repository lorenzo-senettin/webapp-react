import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/films")
      .then((res) => setFilms(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Elenco Film</h1>
      <ul className="list-group">
        {films.map((e) => (
          <li key={e.id} className="list-group-item">
            <Link to={`/films/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
