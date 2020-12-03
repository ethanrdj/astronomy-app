import React from "react";
import { render } from "@testing-library/react";
import Apod from "../components/Apod";

describe("Apod", () => {
  const mockData = {
    title: "Mock Nasa Title",
    date: "25th December 2019",
    explanation: "Apod explanation mock",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Apod />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    const { getByText, getByTestId } = render(<Apod data={mockData} />);

    expect(getByText("Astronomy Picture of The Day")).toBeInTheDocument();
    expect(
      getByText("Each day NASA uploads an astronomical photo, here is todays..")
    ).toBeTruthy();
    expect(getByTestId("apod")).toHaveClass("Apod");
  });
});
