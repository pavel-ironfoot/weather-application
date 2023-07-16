import { render, screen } from "@testing-library/react";
import { AllCards } from "./AllCards";

describe("AllCards component", () => {
  const mockCards = [
    { city: "London", celsius: true },
    { city: "Paris", celsius: false },
  ];

  it("renders cards correctly", () => {
    render(<AllCards />);
    const cardElements = screen.getAllByRole("listitem");

    expect(cardElements.length).toBe(mockCards.length);
    expect(cardElements[0]).toHaveTextContent("London");
    expect(cardElements[1]).toHaveTextContent("Paris");
  });
});