import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AwardInfoProps {
  formData: {
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
  };
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  errors: { [key: string]: string };
}

export default function AwardInfo({
  formData,
  handleInputChange,
  handleSelectChange,
  errors,
}: AwardInfoProps) {
  const renderCategorySpecificFields = () => {
    switch (formData.selectedAward) {
      case "Best E-Commerce Platform":
        return (
          <div className="space-y-2">
            <Label htmlFor="userExperience">User Experience</Label>
            <Textarea
              id="userExperience"
              name="userExperience"
              value={formData.userExperience}
              onChange={handleInputChange}
              placeholder="Describe user experience, ease of navigation, and satisfaction"
            />
            {errors.userExperience && (
              <p className="text-red-500">{errors.userExperience}</p>
            )}

            <Label htmlFor="performance">Performance</Label>
            <Textarea
              id="performance"
              name="performance"
              value={formData.performance}
              onChange={handleInputChange}
              placeholder="Describe performance metrics (load time, uptime, etc.)"
            />
            {errors.performance && (
              <p className="text-red-500">{errors.performance}</p>
            )}

            <Label htmlFor="security">Security</Label>
            <Textarea
              id="security"
              name="security"
              value={formData.security}
              onChange={handleInputChange}
              placeholder="Describe security measures (SSL, PCI DSS, etc.)"
            />
            {errors.security && (
              <p className="text-red-500">{errors.security}</p>
            )}

            <Label htmlFor="innovation">Innovation</Label>
            <Textarea
              id="innovation"
              name="innovation"
              value={formData.innovation}
              onChange={handleInputChange}
              placeholder="Describe unique features or technologies implemented"
            />
            {errors.innovation && (
              <p className="text-red-500">{errors.innovation}</p>
            )}

            <Label htmlFor="testimonials">User Testimonials</Label>
            <Textarea
              id="testimonials"
              name="testimonials"
              value={formData.testimonials}
              onChange={handleInputChange}
              placeholder="Provide customer reviews or testimonials"
            />
            {errors.testimonials && (
              <p className="text-red-500">{errors.testimonials}</p>
            )}
          </div>
        );

      case "Most Innovative Digital Trade Solution":
        return (
          <div className="space-y-2">
            <Label htmlFor="creativity">Creativity</Label>
            <Textarea
              id="creativity"
              name="creativity"
              value={formData.creativity}
              onChange={handleInputChange}
              placeholder="Describe the originality of your solution"
            />
            {errors.creativity && (
              <p className="text-red-500">{errors.creativity}</p>
            )}

            <Label htmlFor="problemSolved">Problem Solved</Label>
            <Textarea
              id="problemSolved"
              name="problemSolved"
              value={formData.problemSolved}
              onChange={handleInputChange}
              placeholder="Describe the problem your solution addresses"
            />
            {errors.problemSolved && (
              <p className="text-red-500">{errors.problemSolved}</p>
            )}

            <Label htmlFor="scalability">Scalability</Label>
            <Textarea
              id="scalability"
              name="scalability"
              value={formData.scalability}
              onChange={handleInputChange}
              placeholder="Describe how scalable your solution is"
            />
            {errors.scalability && (
              <p className="text-red-500">{errors.scalability}</p>
            )}

            <Label htmlFor="userFeedback">User Feedback</Label>
            <Textarea
              id="userFeedback"
              name="userFeedback"
              value={formData.userFeedback}
              onChange={handleInputChange}
              placeholder="Include positive feedback from users"
            />
            {errors.userFeedback && (
              <p className="text-red-500">{errors.userFeedback}</p>
            )}

            <Label htmlFor="futurePlans">Future Plans</Label>
            <Textarea
              id="futurePlans"
              name="futurePlans"
              value={formData.futurePlans}
              onChange={handleInputChange}
              placeholder="Describe your plans for the next 2-5 years"
            />
            {errors.futurePlans && (
              <p className="text-red-500">{errors.futurePlans}</p>
            )}
          </div>
        );

      case "E-Commerce Champion of the Year":
        return (
          <div className="space-y-2">
            <Label htmlFor="overallImpact">Overall Impact</Label>
            <Textarea
              id="overallImpact"
              name="overallImpact"
              value={formData.overallImpact}
              onChange={handleInputChange}
              placeholder="Describe your impact on the e-commerce industry"
            />
            {errors.overallImpact && (
              <p className="text-red-500">{errors.overallImpact}</p>
            )}

            <Label htmlFor="innovationChampion">Innovation</Label>
            <Textarea
              id="innovationChampion"
              name="innovationChampion"
              value={formData.innovationChampion}
              onChange={handleInputChange}
              placeholder="Describe groundbreaking technologies or strategies"
            />
            {errors.innovationChampion && (
              <p className="text-red-500">{errors.innovationChampion}</p>
            )}

            <Label htmlFor="sustainability">Sustainability</Label>
            <Textarea
              id="sustainability"
              name="sustainability"
              value={formData.sustainability}
              onChange={handleInputChange}
              placeholder="How do you incorporate sustainability practices?"
            />
            {errors.sustainability && (
              <p className="text-red-500">{errors.sustainability}</p>
            )}

            <Label htmlFor="socialImpact">Social Impact</Label>
            <Textarea
              id="socialImpact"
              name="socialImpact"
              value={formData.socialImpact}
              onChange={handleInputChange}
              placeholder="Describe your initiatives for social responsibility"
            />
            {errors.socialImpact && (
              <p className="text-red-500">{errors.socialImpact}</p>
            )}

            <Label htmlFor="vision">Vision</Label>
            <Textarea
              id="vision"
              name="vision"
              value={formData.vision}
              onChange={handleInputChange}
              placeholder="Describe your long-term vision for the next 5-10 years"
            />
            {errors.vision && <p className="text-red-500">{errors.vision}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={formData.selectedAward}
          onValueChange={(value) => handleSelectChange("selectedAward", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Best E-Commerce Platform">
              Best E-Commerce Platform
            </SelectItem>
            <SelectItem value="Most Innovative Digital Trade Solution">
              Most Innovative Digital Trade Solution
            </SelectItem>
            <SelectItem value="E-Commerce Champion of the Year">
              E-Commerce Champion of the Year
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.selectedAward && (
          <p className="text-red-500">{errors.selectedAward}</p>
        )}
      </div>
      {renderCategorySpecificFields()}
    </div>
  );
}
