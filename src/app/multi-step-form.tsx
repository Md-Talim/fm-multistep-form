"use client";

import { PersonalInfoForm, SelectPlan } from "@/components/forms";
import { useStep } from "@/hooks/use-step";

const MultiStepForm = () => {
  const { step } = useStep();

  return (
    <div>
      {step == 1 && <PersonalInfoForm />}
      {step == 2 && <SelectPlan />}
    </div>
  );
};

export default MultiStepForm;
