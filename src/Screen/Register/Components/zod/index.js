import { z } from "zod";

export const generalInfoSchema = z.object({
  businessName: z.string({ required_error: "Business Name is required" }),
  businessAddress: z.string({ required_error: "Business Address is required" }),
  briefDescription: z.string({
    required_error: "Brief Description is required",
  }),
  contactName: z.string({ required_error: "Contact Name is required" }),
  contactEmail: z
    .string({ required_error: "Contact Email is required" })
    .email("Invalid email address"),
  contactPhone: z.string({ required_error: "Contact Phone is required" }),
});

export const bestEcommercePlatformSchema = z.object({
  userExperience: z.string({
    required_error: "User experience cannot be empty",
  }),
  performance: z.string({
    required_error: "Performance cannot be empty",
  }),
  security: z.string({
    required_error: "Security cannot be empty",
  }),
  innovation: z.string({
    required_error: "Innovation cannot be empty",
  }),
  testimonials: z.string({
    required_error: "Testimonials cannot be empty",
  }),
});

export const mostInnovativeDigitalTradeSolutionSchema = z.object({
  creativity: z.string({
    required_error: "Creativity cannot be empty",
  }),
  problemSolved: z.string({
    required_error: "Problem solved cannot be empty",
  }),
  scalability: z.string({
    required_error: "Scalability cannot be empty",
  }),
  userFeedback: z.string({
    required_error: "User feedback cannot be empty",
  }),
  futurePlans: z.string({
    required_error: "Future plans cannot be empty",
  }),
});

export const eCommerceChampionOfTheYearSchema = z.object({
  overallImpact: z.string({
    required_error: "Overall impact cannot be empty",
  }),
  innovationChampion: z.string({
    required_error: "Innovation champion cannot be empty",
  }),
  sustainability: z.string({
    required_error: "Sustainability cannot be empty",
  }),
  socialImpact: z.string({
    required_error: "Social impact cannot be empty",
  }),
  vision: z.string({
    required_error: "Vision cannot be empty",
  }),
});

const selectedAwardSchema = z.enum(
  [
    "Best E-Commerce Platform",
    "Most Innovative Digital Trade Solution",
    "E-Commerce Champion of the Year",
  ],
  {
    errorMap: () => ({ message: "Please select one of these category" }),
  }
);

export const awardInfoSchema = z
  .object({
    selectedAward: selectedAwardSchema,
  })
  .refine(
    (data) => {
      const { selectedAward } = data;

      if (selectedAward === "Best E-Commerce Platform") {
        return bestEcommercePlatformSchema.parse(data);
      } else if (selectedAward === "Most Innovative Digital Trade Solution") {
        return mostInnovativeDigitalTradeSolutionSchema.parse(data);
      } else if (selectedAward === "E-Commerce Champion of the Year") {
        return eCommerceChampionOfTheYearSchema.parse(data);
      }
    },
    {
      message: "Please fill in all required fields for the selected category",
      path: ["selectedAward"],
    }
  );

export const finalInfoSchema = z.object({
  supportingDocuments: z
    .array(z.instanceof(File))
    .min(1, "Supporting documents are required."),
  additionalComments: z.string().optional(),
});
