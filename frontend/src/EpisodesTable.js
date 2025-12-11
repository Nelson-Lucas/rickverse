import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, CircularProgress
} from "@mui/material";
import "./styles/table.css";

function EpisodesTable() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/episodes?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);
      });
  }, [page]);

  const filteredEpisodes = episodes.filter(ep =>
    ep.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <h1>Rickverse - Episódios</h1>

      <TextField
        label="Buscar episódio"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Data de Exibição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEpisodes.map((ep) => (
                <TableRow key={ep.id}>
                  <TableCell>{ep.id}</TableCell>
                  <TableCell>
                    <Link to={`/episode/${ep.id}`} className="episode-link">
                      {ep.name}
                    </Link>
                  </TableCell>
                  <TableCell>{ep.air_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div className="pagination">
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ← Anterior
        </Button>
        <span>Página {page} de {totalPages}</span>
        <Button
          variant="contained"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Próxima →
        </Button>
      </div>
    </div>
  );
}

export default EpisodesTable;
