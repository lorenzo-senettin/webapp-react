import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <h3>Recensioni</h3>
      <ul>
        {movie.reviews.map((r) => (
          <li key={r.id}>{r.content}</li>
        ))}
      </ul>
    </div>
  );
}
