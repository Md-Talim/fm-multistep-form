import { SelectPlanForm } from "@/components/forms";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("renders heading title", () => {
  render(<SelectPlanForm />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/select plan/i);
});
