import { Heading, ActionLine, Text, Points } from "../../Components/Text";
import { Main } from "../../assets/Images";
import { Input } from "../../Components/Input";

const pointsData = [
  { contet: "Simple to use, powerful when you need it" },
  { contet: "Manage multiple complex projects with ease" },
  { contet: "Scales into a full platform" },
];

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-center items-center midDevice:flex-col w-full max-w-[1132px] mobile:px-[20px] gap-y-[20px] desktop:my-[0px] wide-desktop:my-[100px]">
      {/*Contet Portion*/}
      <div className=" w-[50%] midDevice:w-full flex flex-col justify-center midDevice:items-center midDevice:px-3 mb-10">
        <Heading
          content="Project management software loved by.."
          customClass="midDevice:text-center"
        />
        <ActionLine
          content="Start up  Team"
          customClass=" midDevice:text-center"
        />
        <Text
          content="Trusted by over 400+ companies"
          customClass="midDevice:text-center"
        />

        <div className="my-2 flex flex-col midDevice:justify-center max-w-[400px] ">
          {pointsData.map((point) => {
            return <Points content={point.contet} customClass="mobile:my-1" />;
          })}
        </div>

        <Input placeholder="Enter your email" type="email" customClass="" />
      </div>

      {/*Image Portion*/}
      <div className="w-[50%]  midDevice:w-full">
        <img src={Main} alt="image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HeroSection;
