"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import GeneralInfo from "./components/GeneralInfo";
import AwardInfo from "./components/AwardInfo";
import FinalInfo from "./components/FinalInfo";
import ReviewInfo from "./components/ReviewInfo";
import { awardInfoSchema, finalInfoSchema, generalInfoSchema } from "../zod";

const steps = ["General Info", "Award Info", "Final Info", "Review"];

interface FormData {
  businessName: string;
  businessAddress: string;
  briefDescription: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  selectedAward: string;
  userExperience: string;
  performance: string;
  security: string;
  innovation: string;
  testimonials: string;
  creativity: string;
  problemSolved: string;
  scalability: string;
  userFeedback: string;
  futurePlans: string;
  overallImpact: string;
  innovationChampion: string;
  sustainability: string;
  socialImpact: string;
  vision: string;
  supportingDocuments: File[];
  additionalComments: string;
}

export default function RegisterForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessAddress: "",
    briefDescription: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    selectedAward: "",
    userExperience: "",
    performance: "",
    security: "",
    innovation: "",
    testimonials: "",
    creativity: "",
    problemSolved: "",
    scalability: "",
    userFeedback: "",
    futurePlans: "",
    overallImpact: "",
    innovationChampion: "",
    sustainability: "",
    socialImpact: "",
    vision: "",
    supportingDocuments: [],
    additionalComments: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (files: File[]) => {
    setFormData((prevData) => ({
      ...prevData,
      supportingDocuments: [...prevData.supportingDocuments, ...files],
    }));
  };

  const handleFileDelete = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      supportingDocuments: prevData.supportingDocuments.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const validateSchema = (schema: any, data: FormData) => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (e: any) {
      const fieldErrors = e.errors.reduce(
        (acc: { [key: string]: string }, err: any) => {
          acc[err.path[0]] = err.message;
          return acc;
        },
        {}
      );
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleNext = () => {
    if (step === 1 && !validateSchema(generalInfoSchema, formData)) return;
    if (step === 2 && !validateSchema(awardInfoSchema, formData)) return;
    if (step === 3 && !validateSchema(finalInfoSchema, formData)) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <GeneralInfo
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <AwardInfo
            formData={formData}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <FinalInfo
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            handleFileDelete={handleFileDelete}
            errors={errors}
          />
        );
      case 4:
        return <ReviewInfo formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-sky-100 dark:bg-sky-100/20 p-4">
      <div className="absolute inset-0 bg-[url('/images/register.png')] bg-cover bg-center opacity-30"></div>
      <div className="w-full max-w-4xl mb-8 mt-[100px] z-10">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Register
        </h3>
        <div className="max-w-lg m-auto flex justify-between items-center px-4 overflow-x-auto">
          {steps.map((stepName, index) => (
            <div key={stepName} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                    ${
                      step > index + 1
                        ? "bg-[#2980B9] text-white"
                        : step === index + 1
                        ? "bg-[#2980B9] text-white"
                        : "bg-white text-gray-500"
                    }`}
                >
                  {index + 1}
                </div>
                <div
                  className={`mt-2 text-xs text-center whitespace-nowrap ${
                    step === index + 1
                      ? "text-[#2980B9] font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {stepName}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-0 md:w-14 h-[2px] mx-2 ${
                    step > index + 1 ? "bg-[#2980B9]" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Card className="w-full max-w-2xl dark:bg-[#161C2D] z-10">
        <CardContent className="pt-6">{renderStep()}</CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button
              className="bg-slate-400 hover:bg-slate-500"
              onClick={handlePrev}
            >
              Previous
            </Button>
          )}
          {step < steps.length ? (
            <Button
              className="bg-[#2980B9] hover:bg-[#2574a9]"
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              className="bg-[#2980B9] hover:bg-[#2574a9]"
              onClick={() => console.log(formData)}
            >
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
