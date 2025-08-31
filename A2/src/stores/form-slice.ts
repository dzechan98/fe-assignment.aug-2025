import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  initialPersonalInfo,
  initialContactInfo,
  initialPreferences,
  type FormState,
  type PersonalInfo,
  type ContactInfo,
  type Preferences,
} from "../types/form";

const initialState: FormState = {
  personalInfo: initialPersonalInfo,
  contactInfo: initialContactInfo,
  preferences: initialPreferences,
  currentStep: 0,
  completedSteps: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
      if (!state.completedSteps.includes(0)) {
        state.completedSteps.push(0);
      }
    },
    setContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      state.contactInfo = action.payload;
      if (!state.completedSteps.includes(1)) {
        state.completedSteps.push(1);
      }
    },
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      state.preferences = action.payload;
      if (!state.completedSteps.includes(2)) {
        state.completedSteps.push(2);
      }
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 2) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    resetForm: (state) => {
      state.personalInfo = initialPersonalInfo;
      state.contactInfo = initialContactInfo;
      state.preferences = initialPreferences;
      state.currentStep = 0;
      state.completedSteps = [];
    },
  },
});

export const {
  setPersonalInfo,
  setContactInfo,
  setPreferences,
  setCurrentStep,
  nextStep,
  prevStep,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
