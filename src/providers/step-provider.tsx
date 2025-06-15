"use client";

import React, { createContext, useState } from "react";

type StepContextType = {
  step: number;
  setStep: (step: number) => void;
};

export const StepContext = createContext<StepContextType | undefined>(
  {} as StepContextType
);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
