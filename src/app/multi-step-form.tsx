"use client";

import { PersonalInfoForm, SelectPlanForm } from "@/components/forms";
import { useStep } from "@/hooks/use-step";

const MultiStepForm = () => {
  const { step } = useStep();

  return (
    <>
      {step == 1 && <PersonalInfoForm />}
      {step == 2 && <SelectPlanForm />}
    </>
  );
};

export default MultiStepForm;
