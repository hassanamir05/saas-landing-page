import { Input } from "../../Components/Input";
import { Heading, Text } from "../../Components/Text";

const CallToAction = () => {
  return (
    <div className="flex flex-row justify-between midDevice:justify-center items-center midDevice:flex-col  bg-white border border-gray-300 shadow-3xl rounded-[20px] mx-4 py-3 px-2">
      <div className="w-full max-w-[570px] flex flex-col px-[20px] py-10 midDevice:w-full">
        <Heading
          content="All-in-one workspace"
          customClass="w-full text-start mobile:text-center text-3xl midDevice:max-w-full"
        />
        <Text
          content="Projećt Plan helps you visualize your team’s workload,
monitor progress, and all from a single easy-to-use dashboard."
          customClass="w-full text-start mobile:text-center text-lg midDevice:max-w-full"
        />
      </div>
      <Input placeholder="Your email address..." type="email" />
    </div>
  );
};

export default CallToAction;
