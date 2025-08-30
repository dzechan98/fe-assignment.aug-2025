import { useAppSelector } from "@/hooks/redux";
import { Check, User, Mail, Settings } from "lucide-react";

const steps = [
  {
    id: 0,
    name: "Personal Info",
    description: "Basic information",
    icon: User,
  },
  { id: 1, name: "Contact Info", description: "Contact details", icon: Mail },
  {
    id: 2,
    name: "Preferences",
    description: "Your preferences",
    icon: Settings,
  },
];

export function ProgressBar() {
  const { currentStep, completedSteps } = useAppSelector((state) => state.form);

  return (
    <div className="w-full mb-8">
      <div className="relative">
        {/* Progress line background */}
        <div className="absolute top-4 left-8 right-8 h-px bg-border" />

        {/* Active progress line */}
        <div
          className="absolute top-4 left-8 h-px bg-red-500 transition-all duration-500 ease-out max-w-[calc(100%-64px)]"
          style={{
            width: `calc(${(currentStep / (steps.length - 1)) * 100}% - 2rem)`,
          }}
        />

        {/* Step indicators */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = currentStep === step.id;

            return (
              <div key={step.id} className="flex flex-col items-center group">
                {/* Step circle */}
                <div
                  className={`
                    relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 bg-background
                    ${
                      isCompleted
                        ? "border-primary text-primary shadow-sm"
                        : isCurrent
                        ? "border-primary text-primary shadow-sm scale-110"
                        : "border-muted-foreground/30 text-muted-foreground"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-3.5 h-3.5" />
                  )}

                  {/* Current step indicator ring */}
                  {isCurrent && (
                    <div className="absolute -inset-1 rounded-full border border-primary/30 animate-pulse" />
                  )}
                </div>

                {/* Step label */}
                <div className="mt-2 text-center">
                  <div
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isCompleted || isCurrent
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
