import { FormTitle } from "@/components/forms/form-title";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("renders the title and subtitle", () => {
  const title = "Form title";
  const subtitle = "Form long subtitle";
  render(<FormTitle title={title} subtitle={subtitle} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(subtitle)).toBeInTheDocument();
});
