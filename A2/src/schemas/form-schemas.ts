import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  nationality: z.string().min(1, "Nationality is required"),
});

export const contactInfoSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits"),
  address: z
    .string()
    .min(1, "Address is required")
    .min(5, "Address must be at least 5 characters"),
  city: z
    .string()
    .min(1, "City is required")
    .min(2, "City must be at least 2 characters"),
  zipCode: z
    .string()
    .min(1, "ZIP code is required")
    .min(3, "ZIP code must be at least 3 characters"),
  country: z.string().min(1, "Country is required"),
});

export const preferencesSchema = z.object({
  marketingEmails: z.boolean(),
  newsletters: z.boolean(),
  notifications: z.boolean(),
  language: z.string().min(1, "Language is required"),
  theme: z.string().min(1, "Theme is required"),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
});

export type PersonalInfoForm = z.infer<typeof personalInfoSchema>;
export type ContactInfoForm = z.infer<typeof contactInfoSchema>;
export type PreferencesForm = z.infer<typeof preferencesSchema>;
