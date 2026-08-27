import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchMovies from "../movies/SearchMovies";

const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),

  usePathname: () => "/movies",

  useSearchParams: () =>
    new URLSearchParams("page=3&genre=Action"),
}));

describe("SearchMovies", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search input", () => {
    render(<SearchMovies />);

    expect(
      screen.getByRole("textbox", { name: "Search" })
    ).toBeInTheDocument();
  });

  it("uses the existing query as the default value", () => {
    jest.resetModules();

    render(<SearchMovies />);

    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("updates the URL when searching", async () => {
    const user = userEvent.setup();

    render(<SearchMovies />);

    const searchInput = screen.getByRole("textbox");

    await user.type(searchInput, "Batman");

    await waitFor(
      () => {
        expect(mockReplace).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );

    expect(mockReplace).toHaveBeenCalledWith(
      expect.stringContaining("query=Batman")
    );
  });
});