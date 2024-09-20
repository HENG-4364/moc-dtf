import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FinalInfoProps {
  formData: {
    supportingDocuments: File[];
    additionalComments: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileChange: (files: File[]) => void;
  handleFileDelete: (index: number) => void;
  errors: { [key: string]: string };
}

export default function FinalInfo({
  formData,
  handleInputChange,
  handleFileChange,
  handleFileDelete,
  errors,
}: FinalInfoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="supportingDocuments">Supporting Documents</Label>
        <Input
          id="supportingDocuments"
          name="supportingDocuments"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          multiple
        />
        {errors.supportingDocuments && (
          <p className="text-red-500">{errors.supportingDocuments}</p>
        )}
        <p className="text-sm text-gray-500">You can select multiple files</p>
        <div className="mt-2 space-y-2">
          {formData.supportingDocuments.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span className="text-sm truncate">{file.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFileDelete(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="additionalComments">Additional Comments</Label>
        <Textarea
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleInputChange}
          placeholder="Any additional comments or information"
        />
        {errors.additionalComments && (
          <p className="text-red-500">{errors.additionalComments}</p>
        )}
      </div>
    </div>
  );
}
