import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavButton from "../movies/favorites/FavButton";
import { useFavorites } from "@/context/FavoritesContext";
import { NewMovie } from "@/resources/definitions";

jest.mock("@/context/FavoritesContext");

const mockedUseFavorites = useFavorites as jest.Mock;

const movie: NewMovie = {
  id: "1",
  title: "The Dark Knight",
  year: "2008",
  rated: "PG-13",
  released: "18 Jul 2008",
  runtime: "152 min",
  genre: "Action",
  director: "Christopher Nolan",
  writer: "Jonathan Nolan",
  actors: "Christian Bale",
  plot: "Batman fights the Joker.",
  language: "English",
  country: "USA",
  awards: "Won 2 Oscars",
  poster: "poster.jpg",
  metascore: "84",
  imdbrating: "9.0",
  imdbvotes: "3000000",
  type: "movie",
  boxoffice: "$500 million",
  _links: {
    self: { href: "" },
    movie: { href: "" },
  },
};

describe("FavButton", () => {
  it("shows Add Fav when movie is not a favorite", () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();

    mockedUseFavorites.mockReturnValue({
      favorites: [],
      addFavorite,
      removeFavorite,
    });

    render(<FavButton movie={movie} />);

    expect(screen.getByRole("button", { name: "Add Fav" }))
      .toBeInTheDocument();
  });

  it("adds a movie to favorites when clicked", async () => {
    const user = userEvent.setup();

    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();

    mockedUseFavorites.mockReturnValue({
      favorites: [],
      addFavorite,
      removeFavorite,
    });

    render(<FavButton movie={movie} />);

    const button = screen.getByRole("button", {
      name: "Add Fav",
    });

    await user.click(button);

    expect(addFavorite).toHaveBeenCalledTimes(1);
    expect(addFavorite).toHaveBeenCalledWith(movie);
  });

  it("shows Remove Fav when movie is already a favorite", () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();

    mockedUseFavorites.mockReturnValue({
      favorites: [movie],
      addFavorite,
      removeFavorite,
    });

    render(<FavButton movie={movie} />);

    expect(
      screen.getByRole("button", { name: "Remove Fav" })
    ).toBeInTheDocument();
  });

  it("removes a movie from favorites when clicked", async () => {
    const user = userEvent.setup();

    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();

    mockedUseFavorites.mockReturnValue({
      favorites: [movie],
      addFavorite,
      removeFavorite,
    });

    render(<FavButton movie={movie} />);

    await user.click(
      screen.getByRole("button", { name: "Remove Fav" })
    );

    expect(removeFavorite).toHaveBeenCalledTimes(1);
    expect(removeFavorite).toHaveBeenCalledWith(movie);
  });
});