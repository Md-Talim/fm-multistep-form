"use client";

import { useStep } from "@/hooks/use-step";
import clsx from "clsx";

const Stepper = () => {
  const { step } = useStep();

  return (
    <div>
      {/* Desktop sidebar stepper */}
      <div className="hidden lg:block">
        <DesktopStepper currentStep={step} />
      </div>

      {/* Mobile top stepper */}
      <div className="block lg:hidden">
        <MobileStepper currentStep={step} />
      </div>
    </div>
  );
};

export default Stepper;

interface StepperProps {
  currentStep: number;
}

const DesktopStepper = ({ currentStep }: StepperProps) => {
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  return (
    <div className="bg-pattern w-[274px] h-[568px] px-8 py-10 rounded-[10px]">
      <div className="space-y-8">
        {steps.map((stepName, index) => (
          <div key={stepName} className="flex gap-4 items-center text-white">
            <StepCircle
              step={index + 1}
              isStepActive={currentStep === index + 1}
            />
            <div>
              <p className="text-light-blue body-s">Step {index + 1}</p>
              <p className="body-m font-bold uppercase">{stepName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileStepper = ({ currentStep }: StepperProps) => (
  <div className="bg-pattern h-[172px] pt-8 flex justify-center">
    <div className="text-white body-m flex gap-4 mx-auto">
      {[1, 2, 3, 4].map((step) => (
        <StepCircle
          key={step}
          step={step}
          isStepActive={currentStep === step}
        />
      ))}
    </div>
  </div>
);

interface StepCircleProps {
  step: number;
  isStepActive: boolean;
}

const StepCircle = ({ step, isStepActive }: StepCircleProps) => (
  <div
    key={step}
    className={clsx(
      "w-8 h-8 rounded-full border center font-bold",
      isStepActive
        ? "bg-sky-blue border-sky-blue text-denim"
        : "bg-transparent border-white"
    )}
  >
    {step}
  </div>
);
