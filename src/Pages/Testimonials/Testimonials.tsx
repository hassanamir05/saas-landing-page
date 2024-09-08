import { useState } from "react";
import { Button } from "../../Components/Button";
import { Text, ActionLine } from "../../Components/Text";
import { Oval } from "../../assets/Images";

// Array to hold testimonials data
const testimonialsData = [
  {
    text: "“Seriously, you guys have saved me. I need to manage many time-sensitive tasks for myself and other artists. A deadline change? Boom, drag and drop, no morning headache!”",
    author: " - Brandon Williams, Manager at Janji Jiwa Coffee -",
  },
  {
    text: "“This platform has revolutionized the way we handle our projects. It’s seamless and incredibly user-friendly. I can't imagine going back to our old system.”",
    author: " - Sarah Lin, Project Coordinator -",
  },
  {
    text: "“Amazing experience! The drag and drop feature is a lifesaver. My team has never been more efficient. Highly recommended!”",
    author: " - Alex Johnson, CEO at StartUp XYZ -",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-[1132px] flex flex-col justify-center items-center h-full min-h-[375px]">
      <div className="w-full max-w-[747px] flex flex-col gap-y-[30px] justify-center items-center">
        <img
          src={Oval}
          className="h-[80px] w-[80px] mobile:w-[50px] mobile:h-[50px]"
        />

        {/* Wrap the testimonial content with transition classes */}
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            isAnimating
              ? "translate-x-0 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* Testimonial Text */}
          <Text
            content={testimonialsData[currentTestimonial].text}
            customClass="mobile:px-[20px] text-center m-0 p-0 transition-opacity duration-500"
          />
          {/* Author Name */}
          <ActionLine
            content={testimonialsData[currentTestimonial].author}
            customClass="text-[18px] text-center midDevice:text-[14px] mobile:text-[14px] m-0 mobile:px-[30px] p-0 transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex flex-row justify-evenly mobile:px-[20px] mt-5">
        {/* Previous Button */}
        <Button
          name="<"
          customClass="text-3xl bg-[primary 8%] text-primary cursor-pointer transition-all duration-500 hover:scale-110"
          onClick={handlePrev}
        />
        {/* Next Button */}
        <Button
          name=">"
          customClass="text-3xl cursor-pointer transition-all duration-500 hover:scale-110"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Testimonials;
