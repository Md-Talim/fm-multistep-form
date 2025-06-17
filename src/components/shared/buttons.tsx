import { Button } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const PrimaryButton = ({
  label,
  type = "button",
  onClick,
}: ButtonProps) => (
  <Button
    type={type}
    onClick={onClick}
    className="rounded-lg px-4 py-3 body-l bg-denim cursor-pointer hover:bg-[#164A8A]"
  >
    {label}
  </Button>
);

export const SecondaryButton = ({
  label,
  type = "button",
  onClick,
}: ButtonProps) => (
  <Button
    type={type}
    onClick={onClick}
    variant="ghost"
    className="text-gray font-medium hover:text-denim px-0 hover:bg-transparent py-3 body-l cursor-pointer"
  >
    {label}
  </Button>
);
