import { Heading, Text } from "../../Components/Text";
import {
  AboutUsImage,
  Google,
  AirBnb,
  Asana,
  Amazon,
  Shopify,
} from "../../assets/Images";

import { Image } from "../../Components/Image";

const AboutUs = () => {
  return (
    <div className="flex  flex-col justify-center items-center  w-full max-w-[1132px] px-[20px] mobile:py-[20px] mobile:pb-0 mobile:mb-0 gap-y-[30px] mt-[20px] mobile:mt-0">
      <div className="flex flex-col w-full text-center  max-w-[800px]">
        <Heading
          content="A project planner that won't let anything slip through the cracks"
          customClass=" w-full max-w-[746px] midDevice:text-[23px] midDevice:text-center max-w-full midDevice:max-w-full"
        />
        <Text
          content="Lovely to look at and easy-to-use, Projećt gives teams a visual overview of who’s doing what, and what’s coming up next. That means less stress and better results."
          customClass=" max-w-[800px] px-4 text-center laptop:text-dark tablet:text-dark midDevice:text-dark midDevice:max-w-full text-[20px]"
        />
      </div>
      <div>
        <img src={AboutUsImage} alt="iamge" />
      </div>
      <div className="flex  justify-around items-center flex-wrap w-full max-w-[964px] gap-y-[20px] mobile:mt-5 mt-8">
        <Image imgSrc={Google} />
        <Image imgSrc={AirBnb} />
        <Image imgSrc={Asana} />
        <Image imgSrc={Shopify} />
        <Image imgSrc={Amazon} />
      </div>
    </div>
  );
};

export default AboutUs;
