import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "../navbar/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });
  });

  it("shows Dark when dark mode is disabled", () => {
    render(<ThemeToggle />);

    expect(screen.getByText("Dark")).toBeInTheDocument();
  });

  it("switches to Light when clicked", async () => {
    const user = userEvent.setup();

    render(<ThemeToggle />);

    await user.click(screen.getByText("Dark"));

    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(document.documentElement).toHaveClass("dark");

    expect(localStorage.getItem("darkMode")).toBe("true");
  });

  it("loads the saved dark mode preference", () => {
    localStorage.setItem("darkMode", "true");

    render(<ThemeToggle />);

    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(document.documentElement).toHaveClass("dark");
  });
});