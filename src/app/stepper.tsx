"use client";

import { useStep } from "@/hooks/use-step";
import clsx from "clsx";

const Stepper = () => {
  const { step } = useStep();

  return (
    <div>
      {/* Desktop sidebar stepper */}
      <div className="hidden md:block">
        <DesktopStepper currentStep={step} />
      </div>

      {/* Mobile top stepper */}
      <div className="block md:hidden">
        <MobileStepper currentStep={step} />
      </div>
    </div>
  );
};

export default Stepper;

interface StepperProps {
  currentStep: number;
}

const DesktopStepper = ({ currentStep: step }: StepperProps) => {
  return <div></div>;
};

const MobileStepper = ({ currentStep }: StepperProps) => (
  <div className="bg-pattern h-[172px] pt-8 flex justify-center">
    <div className="text-white body-m flex gap-4 mx-auto">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={clsx(
            "w-8 h-8 rounded-full border center font-bold",
            currentStep === step
              ? "bg-sky-blue border-sky-blue text-denim"
              : "bg-transparent border-white"
          )}
        >
          {step}
        </div>
      ))}
    </div>
  </div>
);
