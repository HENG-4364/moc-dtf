import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface GeneralInfoProps {
  formData: {
    businessName: string;
    businessAddress: string;
    briefDescription: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: { [key: string]: string };
}

export default function GeneralInfo({
  formData,
  handleInputChange,
  errors,
}: GeneralInfoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
          placeholder="Enter your business name"
        />
        {errors.businessName && (
          <p className="text-red-500">{errors.businessName}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="businessAddress">Business Address</Label>
        <Input
          id="businessAddress"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleInputChange}
          placeholder="Enter your business address"
        />
        {errors.businessAddress && (
          <p className="text-red-500">{errors.businessAddress}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="briefDescription">Brief Description</Label>
        <Textarea
          id="briefDescription"
          name="briefDescription"
          value={formData.briefDescription}
          onChange={handleInputChange}
          placeholder="Provide a brief overview of your business"
        />
        {errors.briefDescription && (
          <p className="text-red-500">{errors.briefDescription}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactName">Contact Name</Label>
        <Input
          id="contactName"
          name="contactName"
          value={formData.contactName}
          onChange={handleInputChange}
          placeholder="Enter contact person's name"
        />
        {errors.contactName && (
          <p className="text-red-500">{errors.contactName}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactEmail">Contact Email</Label>
        <Input
          id="contactEmail"
          name="contactEmail"
          type="email"
          value={formData.contactEmail}
          onChange={handleInputChange}
          placeholder="Enter contact email"
        />
        {errors.contactEmail && (
          <p className="text-red-500">{errors.contactEmail}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactPhone">Contact Phone</Label>
        <Input
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleInputChange}
          placeholder="Enter contact phone number"
        />
        {errors.contactPhone && (
          <p className="text-red-500">{errors.contactPhone}</p>
        )}
      </div>
    </div>
  );
}
