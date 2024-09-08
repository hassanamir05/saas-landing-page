import TextInterface from "../../Interface/TextInterface";

const ActionLine = ({ content, customClass }: TextInterface) => {
  return (
    <p
      className={`text-primary font-ibm  text-[40px] table:text-[30px] midDevice:text-[30px] my-1  w-full midDevice:max-w-[400px] ${customClass}`}
    >
      {content}
    </p>
  );
};

export default ActionLine;
