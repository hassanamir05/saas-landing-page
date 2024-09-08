import TextInterface from "../../Interface/TextInterface";

const Text = ({ content, customClass }: TextInterface) => {
  return (
    <p
      className={`text-light font-ibm text-[24px] table:text-[24px] midDevice:text-[14px]  w-full midDevice:max-w-[400px] my-1 ${customClass}`}
    >
      {content}
    </p>
  );
};

export default Text;
