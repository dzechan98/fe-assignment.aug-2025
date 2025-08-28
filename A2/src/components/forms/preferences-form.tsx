import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  preferencesSchema,
  type PreferencesForm,
} from "@/schemas/form-schemas";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPreferences, prevStep } from "@/stores/form-slice";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
import { toast } from "sonner";

const interestOptions = [
  "Technology",
  "Sports",
  "Music",
  "Travel",
  "Food",
  "Art",
  "Science",
  "Literature",
];

export function PreferencesFormComponent() {
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((state) => state.form.preferences);

  const form = useForm<PreferencesForm>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: preferences,
    mode: "onChange",
  });

  useEffect(() => {
    form.reset(preferences);
  }, [preferences, form]);

  const onSubmit = (data: PreferencesForm) => {
    dispatch(setPreferences(data));
    toast.success("Form Complete!", {
      description:
        "Congratulations! All steps have been completed successfully. Your PDF preview is now available and ready for download.",
    });
  };

  const handleBack = () => {
    const currentData = form.getValues();
    dispatch(setPreferences(currentData));
    dispatch(prevStep());
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    const currentInterests = form.getValues("interests") || [];
    const newInterests = checked
      ? [...currentInterests, interest]
      : currentInterests.filter((i) => i !== interest);
    form.setValue("interests", newInterests, { shouldValidate: true });
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-semibold">Preferences</CardTitle>
        <p className="text-muted-foreground">
          Customize your experience with us
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-foreground">
                Communication Preferences
              </h3>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="marketingEmails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Marketing Emails
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new products and features
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="cursor-pointer"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newsletters"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Newsletters</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Stay updated with our latest news and updates
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="cursor-pointer"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Push Notifications
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Get notified about important updates
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="cursor-pointer"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme Preference</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Light">Light</SelectItem>
                        <SelectItem value="Dark">Dark</SelectItem>
                        <SelectItem value="System">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interests"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Interests</FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Select topics that interest you
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <FormField
                        key={interest}
                        control={form.control}
                        name="interests"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={interest}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="cursor-pointer"
                                  checked={field.value?.includes(interest)}
                                  onCheckedChange={(checked) => {
                                    handleInterestChange(
                                      interest,
                                      checked as boolean
                                    );
                                  }}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  {interest}
                                </FormLabel>
                              </div>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                Complete Form
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export { PreferencesFormComponent as PreferencesForm };
