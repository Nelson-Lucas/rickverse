import { render, screen } from "@testing-library/react";
import EpisodeDetail from "../EpisodeDetail";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <div>{children}</div>,
  useParams: () => ({ id: "1" }),
}));

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          episode: "Lawnmower Dog",
          characters: [
            { name: "Snuffles", image: "snuffles.png" },
            { name: "Scary Terry", image: "terry.png" },
          ],
        }),
    })
  );
});

test("renderiza nome do episódio e personagens", async () => {
  render(<EpisodeDetail />);
  expect(await screen.findByText(/Episódio: Lawnmower Dog/i)).toBeInTheDocument();
  expect(await screen.findByText(/Snuffles/i)).toBeInTheDocument();
  expect(await screen.findByText(/Scary Terry/i)).toBeInTheDocument();
});
