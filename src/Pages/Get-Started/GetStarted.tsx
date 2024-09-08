import { Card } from "../../Components/Card";
import {
  Notification,
  Perfect,
  Enable,
  Folder,
  Clipboard,
  Contract,
} from "../../assets/Images";
import { Button } from "../../Components/Button";

const cardData = [
  {
    imgSrc: Perfect,
    title: "East to use",
    description:
      "The intuitive drag-and-drop interface makes planning fun again.",
  },
  {
    imgSrc: Enable,
    title: "Find clarity",
    description:
      "Everyone can have a ` bird's eye view ` of tasks and deadlines.",
  },
  {
    imgSrc: Notification,
    title: "Stay up to date",
    description:
      "Plan and collaborate in real time. Projećt Plan updates instantly.",
  },
];

const cardData2 = [
  {
    imgSrc: Clipboard,
    title: "1.  Register Account",
    description:
      "Free for small teams. 14-day free trial for premium features.",
  },
  {
    imgSrc: Folder,
    title: "2.  Create first project",
    description: "Off-load the details for your most stressful project here.",
  },
  {
    imgSrc: Contract,
    title: "3.  Add your tasks",
    description:
      "Offload the stressful stuff. Drag and drop your way to sanity.",
  },
];

const GetStarted = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1132px] p gap-y-[30px] mobile:pb-[1px]">
      {/*Cards */}
      <div className="flex flex-wrap justify-center items-center">
        {cardData.map((data) => {
          return (
            <Card
              imgSrc={data.imgSrc}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
      {/*Content with Background */}
      <div className="w-full max-w-[1440px] bg-gradient-to-b from-[#07357A] to-[#3984F3] px-[20px] flex flex-col  justify-center items-center py-[200px] mobile:py-[50px]">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-y-[20px]">
          <Button
            name="How it Works"
            customClass="text-[#F64343] bg-[#FFE3E8] max-w-[145px]"
          />
          <h1 className="font-poppins font-bold text-[38px] midDevice:text-[24px] text-white w-full text-center">
            Easy Steps to Get Started
          </h1>
          <p className="font-roboto text-[20px] text-white font-regular w-full text-center">
            Follow this steps below to start use of Projećt Software. For
            personal guide you can insert your mail here.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {cardData2.map((data) => {
            return (
              <Card
                imgSrc={data.imgSrc}
                title={data.title}
                description={data.description}
                customClass="text-white"
                text1color="white"
                text2color="wiite"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
