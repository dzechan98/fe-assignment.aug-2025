import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactInfoSchema,
  type ContactInfoForm,
} from "@/schemas/form-schemas";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setContactInfo, nextStep, prevStep } from "@/stores/form-slice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";

export function ContactInfoFormComponent() {
  const dispatch = useAppDispatch();
  const contactInfo = useAppSelector((state) => state.form.contactInfo);

  const form = useForm<ContactInfoForm>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: contactInfo,
    mode: "onChange",
  });

  useEffect(() => {
    form.reset(contactInfo);
  }, [contactInfo, form]);

  const onSubmit = (data: ContactInfoForm) => {
    dispatch(setContactInfo(data));
    dispatch(nextStep());
  };

  const handleBack = () => {
    const currentData = form.getValues();
    dispatch(setContactInfo(currentData));
    dispatch(prevStep());
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-semibold">
          Contact Information
        </CardTitle>
        <p className="text-muted-foreground">
          Please provide your contact details
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your street address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your ZIP code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1 h-10 text-sm font-medium bg-transparent"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="flex-1 h-10 text-sm font-medium"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export { ContactInfoFormComponent as ContactInfoForm };
