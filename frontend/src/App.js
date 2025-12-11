import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EpisodesTable from "./EpisodesTable";
import EpisodeDetail from "./EpisodeDetail";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EpisodesTable />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
