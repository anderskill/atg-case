import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the Header component with children", () => {
  const childText = "Hello, World!";
  render(
    <Header>
      <p>{childText}</p>
    </Header>
  );

  const childElement = screen.getByText(childText);

  expect(childElement).toBeInTheDocument();
});
