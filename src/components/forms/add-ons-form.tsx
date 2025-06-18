import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { FormTitle } from "@/components/shared/form-title";
import { Form } from "@/components/ui/form";
import { useStep } from "@/hooks/use-step";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({});

const addOnsList = [
  {
    name: "Online Service",
    feature: "Access to multiplayer games",
    price: { montly: 1, yearly: 10 },
  },
  {
    name: "Larger storage",
    feature: "Extra 1TB of cloud save",
    price: { montly: 2, yearly: 20 },
  },
  {
    name: "Customizable profile",
    feature: "Custom theme on your profile",
    price: { montly: 2, yearly: 20 },
  },
];

const AddOns = () => {
  const { step, setStep } = useStep();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "arcade",
      billing: "monthly",
    },
  });

  const onSubmit = () => {
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="bg-white px-6 py-8 lg:px-[100px] lg:py-12 mx-4 lg:mx-0 rounded-[10px] max-lg:-mt-20 space-y-[22px] lg:space-y-10 max-lg:max-w-xl sm:mx-auto">
        <FormTitle
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-3 lg:space-y-4">
              {addOnsList.map((addOn) => (
                <div
                  key={addOn.name}
                  className="flex items-center justify-between px-4 lg:px-6 pt-[11px] pb-3 lg:pt-4 lg:pb-5 border border-gray lg:w-[450px] rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <Checkbox />
                    <div>
                      <h3 className="body-m lg:body-l font-medium text-denim">
                        {addOn.name}
                      </h3>
                      <p className="body-s lg:body-m text-gray">
                        {addOn.feature}
                      </p>
                    </div>
                  </div>
                  <p className="body-s lg:body-m text-purple">
                    +${addOn.price.montly}/mo
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex justify-between mt-[81px]">
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
    </>
  );
};

export default AddOns;
