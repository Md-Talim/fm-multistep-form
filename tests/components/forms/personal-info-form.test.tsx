import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import PersonalInfoForm from "../../../src/components/forms/personal-info-form";

test("renders form fields", () => {
  render(<PersonalInfoForm />);
  expect(screen.getByText(/personal info/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
});

test("allows user to type in fields", () => {
  render(<PersonalInfoForm />);
  const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
  fireEvent.change(nameInput, { target: { value: "Stephen King" } });
  expect(nameInput.value).toBe("Stephen King");
});
