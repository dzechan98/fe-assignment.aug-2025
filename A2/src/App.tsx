import { ContactInfoForm } from "@/components/forms/contact-info-form";
import { PersonalInfoForm } from "@/components/forms/personal-info-form";
import { PreferencesForm } from "@/components/forms/preferences-form";
import PDFPreview from "@/components/pdf-preview";
import { ProgressBar } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { resetForm } from "@/stores/form-slice";
import { RotateCcw } from "lucide-react";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.form);

  const handleReset = () => {
    dispatch(resetForm());
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <ContactInfoForm />;
      case 2:
        return <PreferencesForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Multi-Step Form Application
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete all steps to generate your personalized PDF document. Your
            progress is automatically saved as you go.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start xl:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="space-y-8 bg-card text-card-foreground rounded-xl border shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-1">Form Progress</h2>
                <p className="text-muted-foreground">
                  Step {currentStep + 1} of {3}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleReset}
                className="gap-2 bg-transparent"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Form
              </Button>
            </div>

            <ProgressBar />

            {renderCurrentForm()}
          </div>

          {/* PDF Preview Section */}
          <PDFPreview />
        </div>
      </div>
    </div>
  );
}
