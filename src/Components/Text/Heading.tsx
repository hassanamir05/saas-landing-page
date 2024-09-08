import TextInterface from "../../Interface/TextInterface";

const Heading = ({ content, customClass }: TextInterface) => {
  return (
    <p
      className={`font-poppins font-bold text-[40px] table:text-[35px] midDevice:text-[30px] w-full midDevice:max-w-[400px] my-1 ${customClass}`}
    >
      {content}
    </p>
  );
};

export default Heading;
