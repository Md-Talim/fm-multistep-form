import { Switch } from "@/components/ui/switch";
import { useStep } from "@/hooks/use-step";
import { useSubscription } from "@/hooks/use-subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { PrimaryButton, SecondaryButton } from "../shared/buttons";
import { FormTitle } from "../shared/form-title";
import { Form, FormField } from "../ui/form";

const subscriptionSchema = z.object({
  plan: z.enum(["arcade", "advanced", "pro"]),
  type: z.enum(["monthly", "yearly"]),
});

const SelectPlanForm = () => {
  const { step, setStep } = useStep();
  const { subscription, setSubscription } = useSubscription();

  const form = useForm<z.infer<typeof subscriptionSchema>>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      plan: "arcade",
      type: "monthly",
    },
  });

  const onSubmit = (data: z.infer<typeof subscriptionSchema>) => {
    setSubscription({ ...subscription, type: data.type, plan: data.plan });
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  const handleSubscriptionTypeToggle = (
    checked: boolean,
    field: ControllerRenderProps<z.infer<typeof subscriptionSchema>>
  ) => {
    const subscriptionType = checked ? "yearly" : "monthly";
    field.onChange(subscriptionType);
    setSubscription({
      ...subscription,
      type: subscriptionType,
    });
  };

  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      price: { monthly: "$9/mo", yearly: "$90/yr" },
    },
    {
      id: "advanced",
      name: "Advanced",
      price: { monthly: "$12/mo", yearly: "$120/yr" },
    },
    { id: "pro", name: "Pro", price: { monthly: "$15/mo", yearly: "$150/yr" } },
  ];

  return (
    <div>
      <div className="bg-white px-6 py-8 lg:px-[100px] lg:py-12 mx-4 lg:mx-0 rounded-[10px] max-lg:-mt-20 space-y-[22px] lg:space-y-10 max-lg:max-w-xl sm:mx-auto overflow-scroll">
        <FormTitle
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <div className="flex gap-3 flex-col lg:flex-row lg:gap-[18px]">
                    {plans.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => field.onChange(plan.id)}
                        className={clsx(
                          "p-4 lg:pt-5 border rounded-xl flex lg:flex-col gap-[14px] lg:w-[138px] lg:min-h-[160px] items-start lg:justify-between",
                          field.value === plan.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-light-gray"
                        )}
                      >
                        <Image
                          src={`/images/icon-${plan.id}.svg`}
                          alt={plan.name}
                          width={40}
                          height={40}
                        />
                        <span className="flex flex-col items-start">
                          <span className="font-medium">{plan.name}</span>
                          <span className="text-sm text-gray-500">
                            {subscription.type === "monthly"
                              ? plan.price.monthly
                              : plan.price.yearly}
                          </span>
                          {subscription.type === "yearly" && (
                            <span className="text-denim body-s">
                              2 months free
                            </span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg justify-center">
                    <span
                      className={clsx(
                        "font-medium",
                        field.value === "monthly" ? "text-denim" : "text-gray"
                      )}
                    >
                      Monthly
                    </span>

                    <Switch
                      checked={field.value === "yearly"}
                      onCheckedChange={(checked) =>
                        handleSubscriptionTypeToggle(checked, field)
                      }
                    />

                    <span
                      className={clsx(
                        "font-medium",
                        field.value === "yearly" ? "text-denim" : "text-gray"
                      )}
                    >
                      Yearly
                    </span>
                  </div>
                )}
              />
            </div>

            <div className="hidden lg:flex justify-between mt-[92px]">
              <SecondaryButton label="Previous" onClick={handlePreviousClick} />
              <PrimaryButton type="submit" label="Next Step" />
            </div>
          </form>
        </Form>
      </div>

      <div className="lg:hidden h-32" />

      <div className="lg:hidden fixed bottom-0 flex justify-between bg-white p-4 w-full m-0">
        <SecondaryButton label="Previous" onClick={handlePreviousClick} />
        <PrimaryButton
          label="Next Step"
          onClick={form.handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default SelectPlanForm;
