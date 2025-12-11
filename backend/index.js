import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/episodes", async (req, res) => {
  try {
    const { page = 1 } = req.query; 
    const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
    const data = await response.json();
    res.json(data); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar episódios" });
  }
});


app.get("/episode/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const episodeResponse = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const episodeData = await episodeResponse.json();

    const characterPromises = episodeData.characters.map((url) => fetch(url).then((r) => r.json()));
    const characters = await Promise.all(characterPromises);

    const sortedCharacters = characters
      .map((c) => ({ name: c.name, image: c.image }))
      .sort((a, b) => a.name.localeCompare(b.name));

    res.json({
      episode: episodeData.name,
      characters: sortedCharacters,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar personagens" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
