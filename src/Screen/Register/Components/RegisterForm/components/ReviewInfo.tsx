import { Label } from "@/components/ui/label";

interface ReviewInfoProps {
  formData: {
    [key: string]: any; // Adjust type based on your specific formData structure
    awardCategory?: string;
    supportingDocuments?: File[]; // If supportingDocuments is an array of File objects
  };
}

export default function ReviewInfo({ formData }: ReviewInfoProps) {
  const awardFormData: { [key: string]: string[] } = {
    "Best E-Commerce Platform": [
      "businessName",
      "businessAddress",
      "briefDescription",
      "contactName",
      "contactEmail",
      "contactPhone",
      "awardCategory",
      "userExperience",
      "performance",
      "security",
      "innovation",
      "testimonials",
      "supportingDocuments",
      "additionalComments",
    ],
    "Most Innovative Digital Trade Solution": [
      "businessName",
      "businessAddress",
      "briefDescription",
      "contactName",
      "contactEmail",
      "contactPhone",
      "awardCategory",
      "creativity",
      "problemSolved",
      "scalability",
      "userFeedback",
      "futurePlans",
      "supportingDocuments",
      "additionalComments",
    ],
    "E-Commerce Champion of the Year": [
      "businessName",
      "businessAddress",
      "briefDescription",
      "contactName",
      "contactEmail",
      "contactPhone",
      "awardCategory",
      "overallImpact",
      "innovationChampion",
      "sustainability",
      "socialImpact",
      "vision",
      "supportingDocuments",
      "additionalComments",
    ],
  };

  const currentAward = formData?.awardCategory
    ? awardFormData[formData.awardCategory]
    : [];

  return (
    <div className="space-y-4">
      {Object.entries(formData).map(([key, value]) => {
        if (currentAward?.includes(key)) {
          return (
            <div key={key} className="space-y-1">
              <Label className="font-semibold">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Label>
              <div className="bg-gray-100 p-2 rounded dark:text-black">
                {key === "supportingDocuments"
                  ? (value as File[]).map((file) => file.name).join(", ")
                  : value}
              </div>
            </div>
          );
        }
        return null; // Ensure to return null if condition is not met
      })}
    </div>
  );
}
