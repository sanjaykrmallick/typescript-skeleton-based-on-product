import { render, screen } from "@testing-library/react";
import Button from "../../components/common/Button";
import React from "react";

test("renders Button with text", () => {
  render(<Button>Click</Button>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});
