import type { FormState } from "@/types/form";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import React from "react";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Roboto",
  },
  header: {
    paddingBottom: 20,
    marginBottom: 20,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#111827",
  },
  subtitle: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 6,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1F2937",
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  fieldRow: {
    marginBottom: 8,
    fontSize: 10,
    color: "#111827",
  },
  fieldText: {
    fontSize: 10,
    color: "#111827",
  },
  label: {
    fontWeight: 500,
    color: "#4B5563",
  },
  interestsRow: {
    marginBottom: 8,
    fontSize: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  interestsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  badge: {
    backgroundColor: "#DBEAFE",
    color: "#1E40AF",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 9,
    marginRight: 4,
    marginBottom: 4,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 8,
    color: "#9CA3AF",
  },
});

interface PDFDocumentProps {
  formData: FormState;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ formData }) => {
  const { personalInfo, contactInfo, preferences } = formData;

  const formatDate = (dateString: string) =>
    dateString ? format(new Date(dateString), "dd/MM/yyyy") : "N/A";
  const formatGender = (gender: string) =>
    gender
      ? gender.charAt(0).toUpperCase() + gender.slice(1).replace("-", " ")
      : "N/A";
  const formatValue = (value: string | undefined) => value || "N/A";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Registration Form Summary</Text>
          <Text style={styles.subtitle}>
            Generated on: {new Date().toLocaleString()}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>First Name:</Text>{" "}
              {formatValue(personalInfo.firstName)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Last Name:</Text>{" "}
              {formatValue(personalInfo.lastName)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Date of Birth:</Text>{" "}
              {formatDate(personalInfo.dateOfBirth)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Gender:</Text>{" "}
              {formatGender(personalInfo.gender)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Nationality:</Text>{" "}
              {formatValue(personalInfo.nationality)}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Details</Text>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Email:</Text>{" "}
              {formatValue(contactInfo.email)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Phone:</Text>{" "}
              {formatValue(contactInfo.phone)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Address:</Text>{" "}
              {formatValue(contactInfo.address)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>City:</Text>{" "}
              {formatValue(contactInfo.city)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>ZIP Code:</Text>{" "}
              {formatValue(contactInfo.zipCode)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Country:</Text>{" "}
              {formatValue(contactInfo.country)}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences & Interests</Text>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Marketing Emails:</Text>{" "}
              {preferences.marketingEmails ? "Yes" : "No"}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Newsletter:</Text>{" "}
              {preferences.newsletters ? "Yes" : "No"}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Notifications:</Text>{" "}
              {preferences.notifications ? "Yes" : "No"}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Language:</Text>{" "}
              {formatValue(preferences.language)}
            </Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Theme:</Text>{" "}
              {formatValue(preferences.theme)}
            </Text>
          </View>

          <View style={styles.interestsRow}>
            <Text style={styles.fieldText}>
              <Text style={styles.label}>Interests:</Text>
            </Text>
            <View style={styles.interestsList}>
              {preferences?.interests && preferences?.interests.length > 0 ? (
                preferences?.interests?.map((interest) => (
                  <Text key={interest} style={styles.badge}>
                    {interest}
                  </Text>
                ))
              ) : (
                <Text style={styles.fieldText}> No interests selected</Text>
              )}
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          This document is an auto-generated summary of the registration form
          data.
        </Text>
      </Page>
    </Document>
  );
};

export default PDFDocument;
