import { Button } from "@/components/ui/button";
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
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTitle } from "./form-title";

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

  const onSubmit = (_values: z.infer<typeof formSchema>) => {
    setStep(step + 1);
  };

  return (
    <>
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px] -mt-20 space-y-[22px] xl:space-y-10">
        <FormTitle
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          </form>
        </Form>
      </div>

      <div className="absolute bottom-0 flex justify-end bg-white p-4 w-full m-0">
        <Button
          type="button"
          onClick={form.handleSubmit(onSubmit)}
          className={clsx(
            "rounded-lg px-4 py-3 body-l bg-denim cursor-pointer hover:bg-[#164A8A]"
          )}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default PersonalInfoForm;
