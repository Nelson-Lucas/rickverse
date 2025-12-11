import { render, screen, fireEvent } from "@testing-library/react";
import EpisodesTable from "../EpisodesTable";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          info: { pages: 1 },
          results: [
            { id: 1, name: "Pilot", air_date: "December 2, 2013" },
            { id: 2, name: "Lawnmower Dog", air_date: "December 9, 2013" },
          ],
        }),
    })
  );
});

test("renderiza episódios na tabela", async () => {
  render(<EpisodesTable />);
  expect(await screen.findByText(/Pilot/i)).toBeInTheDocument();
  expect(await screen.findByText(/Lawnmower Dog/i)).toBeInTheDocument();
});

test("filtra episódios pelo campo de busca", async () => {
  render(<EpisodesTable />);
  const input = screen.getByLabelText(/Buscar episódio/i);
  fireEvent.change(input, { target: { value: "Pilot" } });

  expect(await screen.findByText(/Pilot/i)).toBeInTheDocument();
  expect(screen.queryByText(/Lawnmower Dog/i)).not.toBeInTheDocument();
});
