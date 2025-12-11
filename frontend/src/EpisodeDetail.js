import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CircularProgress } from "@mui/material";
import "./styles/detail.css";

function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);
  fetch(`${process.env.REACT_APP_API_URL}/episode/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setEpisode(data.episode);
      setCharacters(data.characters);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [id]);


  return (
    <div className="detail-container">
      <h1>Episódio: {episode}</h1>
      <Link to="/" className="back-link">← Voltar para Episódios</Link>

      {loading ? (
        <CircularProgress />
      ) : (
        <div className="characters-grid">
          {characters.map((char) => (
            <Card key={char.name} className="character-card">
              <CardMedia
                component="img"
                height="200"
                image={char.image}
                alt={char.name}
              />
              <CardContent>
                <Typography variant="h6">{char.name}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default EpisodeDetail;
