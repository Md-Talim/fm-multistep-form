import { StepContext } from "@/providers/step-provider";
import { useContext } from "react";

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStep must be used within StepProvider");
  return context;
};
