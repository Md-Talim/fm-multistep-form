import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { FormTitle } from "@/components/shared/form-title";
import { Form, FormField } from "@/components/ui/form";
import { addOnList } from "@/data";
import { useStep } from "@/hooks/use-step";
import { useSubscription } from "@/hooks/use-subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const formSchema = z.object({
  onlineService: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
});

const AddOnsForm = () => {
  const { step, setStep } = useStep();
  const { subscription, setSubscription } = useSubscription();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setSubscription({
      ...subscription,
      addOns: {
        onlineService: data.onlineService ?? false,
        largerStorage: data.largerStorage ?? false,
        customizableProfile: data.customizableProfile ?? false,
      },
    });
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
              {addOnList.map((addOn) => (
                <FormField
                  key={addOn.id}
                  control={form.control}
                  name={addOn.id}
                  render={({ field }) => (
                    <Label
                      key={addOn.id}
                      className="flex items-center justify-between px-4 lg:px-6 pt-[11px] pb-3 lg:pt-4 lg:pb-5 border border-gray hover:border-purple hover:cursor-pointer lg:w-[450px] rounded-xl has-[[aria-checked=true]]:border-purple has-[[aria-checked=true]]:bg-very-light-gray"
                    >
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id={addOn.id}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:border-purple data-[state=checked]:bg-purple data-[state=checked]:text-white"
                        />
                        <div className="grid gap-[3px] lg:gap-[7px]">
                          <p className="body-m lg:body-l text-denim">
                            {addOn.name}
                          </p>
                          <p className="body-s lg:body-m text-gray leading-[20px]">
                            {addOn.feature}
                          </p>
                        </div>
                      </div>
                      <p className="body-s lg:body-m text-purple">
                        +${addOn.price[subscription.type]}/
                        {subscription.type === "monthly" ? "mo" : "yr"}
                      </p>
                    </Label>
                  )}
                />
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

export default AddOnsForm;
