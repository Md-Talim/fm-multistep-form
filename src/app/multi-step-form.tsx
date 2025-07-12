"use client";

import {
  AddOnsForm,
  PersonalInfoForm,
  SelectPlanForm,
} from "@/components/forms";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { FormTitle } from "@/components/shared/form-title";
import { Button } from "@/components/ui/button";
import { addOns, plans } from "@/data";
import { useStep } from "@/hooks/use-step";
import { useSubscription } from "@/hooks/use-subscription";

const MultiStepForm = () => {
  const { step } = useStep();

  return (
    <>
      {step == 1 && <PersonalInfoForm />}
      {step == 2 && <SelectPlanForm />}
      {step == 3 && <AddOnsForm />}
      {step == 4 && <SummaryTable />}
    </>
  );
};

export default MultiStepForm;

const SummaryTable = () => {
  const { subscription } = useSubscription();
  const { step, setStep } = useStep();

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  const handleChangePlan = () => {
    setStep(2);
  };

  const billingPeriod = subscription.type === "monthly" ? "mo" : "yr";

  const subscribedAddOns = Object.entries(subscription.addOns)
    .filter(([_, isSelected]) => isSelected)
    .map(([addOnKey, _]) => {
      const addOn = addOns[addOnKey as keyof typeof addOns];
      return {
        id: addOnKey,
        name: addOn.name,
        price: { monthly: addOn.monthly, yearly: addOn.yearly },
      };
    });

  const total =
    plans[subscription.plan][subscription.type] +
    subscribedAddOns.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.price[subscription.type],
      0
    );

  return (
    <div>
      <div className="bg-white px-6 py-8 lg:px-[100px] lg:py-12 mx-4 lg:mx-0 rounded-[10px] max-lg:-mt-20 space-y-[22px] lg:space-y-10 max-lg:max-w-xl sm:mx-auto">
        <FormTitle
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        />

        <div className="space-y-6">
          <div className="bg-very-light-gray px-4 lg:px-6 py-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="body-m lg:body-l font-medium text-denim capitalize">
                  {subscription.plan} ({subscription.type})
                </p>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 hover:cursor-pointer underline text-gray hover:text-purple"
                  onClick={handleChangePlan}
                >
                  Change
                </Button>
              </div>
              <p className="body-l font-bold text-denim">
                ${plans[subscription.plan][subscription.type]}/{billingPeriod}
              </p>
            </div>

            <hr className="mt-6 mb-4 bg-gray" />

            <div className="space-y-3 lg:space-y-4 mb-2">
              {subscribedAddOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex items-center justify-between"
                >
                  <p className="body-m text-gray">{addOn.name}</p>
                  <p className="body-m text-denim">
                    +${addOn.price[subscription.type]}/{billingPeriod}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-4 lg:px-6">
            <p className="body-m text-gray">Total (per {subscription.type})</p>
            <p className="body-l font-bold text-purple">
              ${total}/{billingPeriod}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-between mt-[81px]">
          <SecondaryButton label="Previous" onClick={handlePreviousClick} />
          <PrimaryButton type="submit" label="Next Step" />
        </div>
      </div>

      <div className="lg:hidden h-32" />

      <div className="lg:hidden fixed bottom-0 flex justify-between bg-white p-4 w-full m-0">
        <SecondaryButton label="Previous" onClick={handlePreviousClick} />
        <PrimaryButton label="Next Step" onClick={handleNextClick} />
      </div>
    </div>
  );
};
