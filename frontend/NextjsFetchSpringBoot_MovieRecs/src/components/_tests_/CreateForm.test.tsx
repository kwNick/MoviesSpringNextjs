import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateForm from "../movies/create/CreateForm";

const mockFormAction = jest.fn();

jest.mock("@/resources/actions", () => ({
  AddMovie: jest.fn(),
}));

const mockState = {
  message: undefined,
  errors: {},
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useActionState: jest.fn(() => [
    mockState,
    mockFormAction,
    false,
  ]),
}));

// jest.mock("react", () => {
//   const actual = jest.requireActual("react");

//   return {
//     ...actual,
//     useActionState: jest.fn(() => [
//       {
//         message: undefined,
//         errors: {},
//       },
//       mockFormAction,
//       false,
//     ]),
//   };
// });

describe("CreateForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all movie fields", () => {
    render(<CreateForm />);

    expect(screen.getByLabelText("Year")).toBeInTheDocument();
    expect(screen.getByLabelText("Genre")).toBeInTheDocument();
    expect(screen.getByLabelText("Rated")).toBeInTheDocument();
    expect(screen.getByLabelText("Poster")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Plot")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });

  it("allows the user to enter movie information", async () => {
    const user = userEvent.setup();

    render(<CreateForm />);

    // const yearInput = screen.getByLabelText("Year") as HTMLInputElement;
    // await user.type(yearInput, "2008");
    // console.log("value:", yearInput.value);
    // console.log("valueAsNumber:", yearInput.valueAsNumber);
    // console.log("type:", yearInput.type);

    await user.type(screen.getByLabelText("Year"), "2008");
    await user.type(screen.getByLabelText("Genre"), "Action");
    await user.type(screen.getByLabelText("Rated"), "PG-13");
    await user.type(screen.getByLabelText("Poster"), "poster.jpg");
    await user.type(screen.getByLabelText("Title"), "The Dark Knight");
    await user.type(
      screen.getByLabelText("Plot"),
      "Batman fights the Joker."
    );

    expect(screen.getByLabelText("Year")).toHaveValue(2008);
    expect(screen.getByLabelText("Genre")).toHaveValue("Action");
    expect(screen.getByLabelText("Rated")).toHaveValue("PG-13");
    expect(screen.getByLabelText("Poster")).toHaveValue("poster.jpg");
    expect(screen.getByLabelText("Title")).toHaveValue("The Dark Knight");
    expect(screen.getByLabelText("Plot")).toHaveValue(
      "Batman fights the Joker."
    );
  });

  it("does not submit when required fields are empty", async () => {
    const user = userEvent.setup();

    render(<CreateForm />);

    const submitButton = screen.getByRole("button", {
      name: "Add Movie",
    });

    await user.click(submitButton);

    expect(mockFormAction).not.toHaveBeenCalled();
  });
});