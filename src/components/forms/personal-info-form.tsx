import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStep } from "@/hooks/use-step";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PrimaryButton } from "../shared/buttons";
import { FormTitle } from "../shared/form-title";

const formSchema = z.object({
  name: z.string().min(3, "Must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is too short"),
});

const PersonalInfoForm = () => {
  const { step, setStep } = useStep();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div className="bg-white px-6 py-8 lg:px-[100px] lg:py-12 mx-4 lg:mx-0 rounded-[10px] max-lg:-mt-20 space-y-[22px] lg:space-y-10 max-lg:max-w-xl sm:mx-auto">
        <FormTitle
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 lg:space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-[3px]">
                    <div className="flex items-center justify-between">
                      <FormLabel className="body-m font-normal">Name</FormLabel>
                      <FormMessage className="body-m text-right font-bold" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="e.g. Stephen King"
                        {...field}
                        className="font-medium body-l placeholder:text-gray"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="body-m font-normal">
                        Email Address
                      </FormLabel>
                      <FormMessage className="body-m text-right font-bold" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="e.g. stephenking@lorem.com"
                        {...field}
                        className="font-medium body-l placeholder:text-gray"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="body-m font-normal">
                        Phone Number
                      </FormLabel>
                      <FormMessage className="body-m text-right font-bold" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="e.g. +1 234 567 890"
                        {...field}
                        className="font-medium body-l placeholder:text-gray"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="hidden lg:flex justify-end mt-[92px]">
              <PrimaryButton type="submit" label="Next Step" />
            </div>
          </form>
        </Form>
      </div>

      <div className="lg:hidden h-32" />

      <div className="lg:hidden fixed bottom-0 flex justify-end bg-white p-4 w-full m-0">
        <PrimaryButton
          label="Next Step"
          onClick={form.handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export default PersonalInfoForm;
