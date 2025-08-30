export interface PersonalInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface Preferences {
  marketingEmails: boolean;
  newsletters: boolean;
  notifications: boolean;
  language: string;
  theme: string;
}

export interface FormState {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  preferences: Preferences;
  currentStep: number;
  completedSteps: number[];
}

export const initialPersonalInfo: PersonalInfo = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
};

export const initialContactInfo: ContactInfo = {
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
};

export const initialPreferences: Preferences = {
  marketingEmails: false,
  newsletters: false,
  notifications: true,
  language: "",
  theme: "",
};
