import { render, screen } from "@testing-library/react";
import ShowMovie from "../movies/ShowMovie";
import { NewMovie } from "@/resources/definitions";

const movie: NewMovie = {
  id: "1",
  title: "The Dark Knight",
  year: "2008",
  rated: "PG-13",
  released: "18 Jul 2008",
  runtime: "152 min",
  genre: "Action, Crime, Drama",
  director: "Christopher Nolan",
  writer: "Jonathan Nolan",
  actors: "Christian Bale, Heath Ledger",
  plot: "Batman fights a criminal mastermind known as the Joker.",
  language: "English",
  country: "USA",
  awards: "Won 2 Oscars",
  poster: "https://example.com/poster.jpg",
  metascore: "84",
  imdbrating: "9.0",
  imdbvotes: "3,000,000",
  type: "movie",
  boxoffice: "$534,987,076",
  _links: {
    self: { href: "" },
    movie: { href: "" },
  },
};

describe("ShowMovie", () => {
  it("renders movie information", () => {
    render(<ShowMovie movie={movie} />);

    expect(screen.getByText("Genre:")).toBeInTheDocument();
    expect(screen.getByText("Action, Crime, Drama")).toBeInTheDocument();

    expect(screen.getByText("Rated:")).toBeInTheDocument();
    expect(screen.getByText("PG-13")).toBeInTheDocument();

    expect(screen.getByText("Christopher Nolan")).toBeInTheDocument();
    expect(screen.getByText("Christian Bale, Heath Ledger")).toBeInTheDocument();

    expect(screen.getByText("Batman fights a criminal mastermind known as the Joker."))
      .toBeInTheDocument();

    expect(screen.getByText("9.0")).toBeInTheDocument();
  });
});